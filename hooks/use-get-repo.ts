import httpRequest from "@/services/http-request";
import { TRepository } from "@/types/requests";
import { getRepoUrl } from "@/utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useGetRepo = () => {
  const router = useRouter();

  const owner = router?.query?.params?.[0] ?? "";
  const repository = router?.query?.params?.[1] ?? "";

  const queryClient = useQueryClient();

  const { data: repositoryData, isLoading: repositoryLoading } =
    useQuery<TRepository>({
      queryKey: ["REPOSITORY", owner, repository],
      queryFn: () => httpRequest(getRepoUrl(owner, repository)),
      // enabled: !!owner && !!repository,
      enabled: false,
      initialData: () => {
        const cacheValue = queryClient.getQueriesData({
          type: "active",
        })?.[0]?.[1] as TRepository[];

        return cacheValue?.find(
          (item: TRepository) => item.name === repository
        );
      },
    });

  return { repository, owner, repositoryData, repositoryLoading };
};
