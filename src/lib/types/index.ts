type ItemSkillType = {
  title: string;
  image: string;
};

export type ObjIdentityType = {
  name: string;
  role: string;
  desc: string;
  img: string | unknown;
};

type KeyOfSkillType =
  | 'Back End Framework'
  | 'Front End Framework'
  | 'Mobile Framework'
  | 'CSS Framework'
  | 'CI/CD'
  | 'State Management'
  | 'Data Fetching'
  | 'Database'
  | 'Repository Control'
  | 'Container';

type SkillsType = {
  [K in Capitalize<KeyOfSkillType>]: ItemSkillType[];
};

export type ExperienceData = {
  key: number;
  office: string;
  role: string;
  time: string;
  desc: string;
};

export type ProjectData = {
  index: number;
  is_true_real_url: boolean;
  title: string;
  identity: string;
  description: string;
  responsibilities: string[];
  technologies: string;
  url: string;
  github_url: string;
};

export type CertificateItem = {
  index: number;
  description: string;
  image: string;
  link: string;
  name: string;
  platform: string;
  years: string;
};

export type HonorItem = {
  name: string;
  platform: string;
  years: string;
  description: string;
  image: {
    src: string;
  } | string;
};

export type SkillEntry = {
  title: string;
  image: {
    src: string;
  } | string;
};

export type SkillItem = {
  category: string;
  item: SkillEntry[];
};

export type SkillTuple = [string, SkillEntry[]][];

export type ContactType = {
  name: string;
  link: string;
}[];

export type UtilitiesType = {
  button_download_file: {
    is_on: boolean;
    link: string;
    text_button: string;
  };
};

export type PersonalDocsType = {
  headers_title: Array<string>;
  identity: ObjIdentityType;
  education: Array<object>;
  experiences: ExperienceData[];
  projects: ProjectData[];
  certificate: CertificateItem[];
  skills: SkillsType;
  contacts: ContactType;
  honors: HonorItem[];
  utilities: UtilitiesType;
};