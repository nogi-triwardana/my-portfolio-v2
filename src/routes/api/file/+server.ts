import type { RequestHandler } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import { get } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from "$env/static/private";

export const GET: RequestHandler = async ({ url, request }) => {
	const pathname = url.searchParams.get('pathname');
	
	if(!pathname) {
		return json({ message: "Missing pathname" }, { status: 400 });
	}

	const result = await get(pathname, {
		access: 'private',
		token: BLOB_READ_WRITE_TOKEN,
	  });

	  if (!result) {
		return new Response('Not found', { status: 404 });
	  }
	
	  // Blob hasn't changed — tell the browser to use its cached copy
	  if (result.statusCode === 304) {
		return new Response(null, {
		  status: 304,
		  headers: {
			ETag: result.blob.etag,
			'Cache-Control': 'private, no-cache',
		  },
		});
	  }
	
	  return new Response(result.stream, {
		headers: {
		  'Content-Type': result.blob.contentType,
		  'X-Content-Type-Options': 'nosniff',
		  ETag: result.blob.etag,
		  'Cache-Control': 'private, no-cache',
		},
	  });
}