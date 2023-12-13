const BASE_URL = "https://api.github.com";
const PER_PAGE = 10;

export const getSearchUrl = (user: string, page: number, perPage = PER_PAGE) => {
  return `${BASE_URL}/users/${user}/repos?per_page=${perPage}&page=${page}`;
};

export const getRepoUrl = (user: string, repo: string) => {
  return `${BASE_URL}/repos/${user}/${repo}`;
};
