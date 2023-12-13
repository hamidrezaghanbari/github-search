
export interface TOwner {
  login: string;
}

export interface TLicense {
  key: string;
  name: string;
  spdx_id: string;
}

export interface TProject {
  id: number;
  owner: TOwner;
  html_url: string;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks: number;
  license: TLicense;
  pushed_at: string;
  size: number;
}
