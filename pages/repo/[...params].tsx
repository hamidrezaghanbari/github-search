import { Info } from "@/components";
import { useGetRepo } from "@/hooks";

const SingleRepositoryPage = () => {
  const { repository, owner, repositoryData, repositoryLoading } = useGetRepo();

  return (
    <div className="flex flex-col flex-wrap items-start lg:px-20 lg:py-12 px-4 py-8 gap-12 bg-neutral-800 min-h-screen">
      <h2 className="text-white font-bold text-2xl truncate">
        Repository: {repository} <small>of</small> {owner}
      </h2>

      {repositoryLoading ? (
        "Loading ... "
      ) : (
        <ul className="flex flex-col gap-2">
          <Info keyProp="Name" value={repositoryData?.name} />
          <Info keyProp="Description" value={repositoryData?.description} />
          <Info keyProp="Watchers Count" value={repositoryData?.watchers} />
          <Info
            keyProp="Starts Count"
            value={repositoryData?.stargazers_count}
          />
          <Info keyProp="Forks" value={repositoryData?.forks} />
          <Info keyProp="Open Issues" value={repositoryData?.open_issues} />
          <Info keyProp="Visibility" value={repositoryData?.visibility} />
          <Info
            keyProp="Subscribers Count"
            value={repositoryData?.subscribers_count}
          />
        </ul>
      )}
    </div>
  );
};

export default SingleRepositoryPage;
