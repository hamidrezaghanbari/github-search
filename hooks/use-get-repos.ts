import httpRequest from "@/services/http-request";
import { TRepository } from "@/types/requests";
import { getSearchUrl } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebounce } from ".";

export const useGetRepos = () => {
  const [user, setUser] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { value: userDebounceValue, handleInputChange } = useDebounce({
    value: user,
    setValue: setUser,
  });

  const { data: repoList, isLoading: repoListLoading } = useQuery<Array<TRepository>>({
    queryKey: ["REPO_LIST", userDebounceValue, page],
    queryFn: () => httpRequest(getSearchUrl(userDebounceValue, page)),
    enabled: !!userDebounceValue?.length && !!page,
  });

  return { repoList, repoListLoading, user, handleInputChange, page, setPage };
};
