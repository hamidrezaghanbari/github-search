import { useGetRepo } from "@/hooks";

const SingleRepositoryPage = () => {
  const { repository, owner, repositoryData, repositoryLoading } = useGetRepo();

  console.log(repositoryData)

  return (
    <div className="flex flex-col items-start lg:px-20 lg:py-12 px-4 py-8 gap-12 bg-neutral-800 min-h-screen">
      <h2 className="text-white font-bold text-2xl">
        {repository} <small>of</small> {owner}
      </h2>
    </div>
  );
};

export default SingleRepositoryPage;
