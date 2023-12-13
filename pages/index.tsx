import { ResultList, Search } from "@/components";
import { useGetRepos } from "@/hooks";

const HomePage = () => {
  const { repoList, repoListLoading, user, handleInputChange } = useGetRepos();

  return (
    <div className="flex flex-col items-center lg:px-20 lg:py-12 px-4 py-8 gap-12 bg-neutral-800 min-h-screen">
      {/* search component */}
      <Search user={user} handleInputChange={handleInputChange} />

      {/* result component */}
      <ResultList list={repoList} loading={repoListLoading} />

      {/* TODO for pagination */}
    </div>
  );
};

export default HomePage;
