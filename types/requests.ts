
export interface TOwner {
  login: string;
}

export interface TLicense {
  key: string;
  name: string;
  spdx_id: string;
}

export interface TRepository {
  id: number;
  owner: TOwner;
  html_url: string;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks: number;
  watchers: number;
  open_issues: number;
  subscribers_count: number;
  license: TLicense;
  pushed_at: string;
  visibility: 'public' | 'private';
  size: number;
}
