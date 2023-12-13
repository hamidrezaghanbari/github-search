const BASE_URL = "https://api.github.com/users/";
const PER_PAGE = 10;

export const getUrl = (user: string, page: number, perPage = PER_PAGE) => {
  return `${BASE_URL}${user}/repos?per_page=${perPage}&page=${page}`;
};
