import httpRequest from "@/services/http-request";
import { TProject } from "@/types/requests";
import { getUrl } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetRepos = () => {
  const [user, setUser] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { data: repoList, isLoading: repoListLoading } = useQuery({
    queryKey: ["REPO_LIST", user, page],
    queryFn: () => httpRequest<Array<TProject>>(getUrl(user, page)),
    enabled: !!user?.length && !!page,
  });

  return { repoList, repoListLoading, user, setUser, page, setPage };
};
