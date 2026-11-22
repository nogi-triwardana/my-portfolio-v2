// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { browser } from '$app/environment';
import { 
    PUBLIC_FIREBASE_API_KEY,
    PUBLIC_FIREBASE_AUTH_DOMAIN,
    PUBLIC_FIREBASE_DATABASE_URL,
    PUBLIC_FIREBASE_PROJECT_ID,
    PUBLIC_FIREBASE_STORAGE_BUCKET,
    PUBLIC_FIREBASE_MESSAGING_BUCKET_SENDER_ID,
    PUBLIC_FIREBASE_APP_ID,
} from '$env/static/public';

const firebaseConfig = {
    apiKey: PUBLIC_FIREBASE_API_KEY,
    authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: PUBLIC_FIREBASE_DATABASE_URL,
    projectId: PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: PUBLIC_FIREBASE_MESSAGING_BUCKET_SENDER_ID,
    appId: PUBLIC_FIREBASE_APP_ID,
    measurementId: 'G-GCBQ1CTKCC',
};

// Initialize Firebase only on the browser to avoid SSR errors
// const app = browser && getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
