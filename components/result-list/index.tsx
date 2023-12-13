import { TRepository } from "@/types/requests";
import { ResultItem } from "./item";

type Props = {
  list?: TRepository[];
  loading: boolean;
};

export const ResultList = ({ list, loading }: Props) => {
  return (
    <div className="flex flex-col gap-4 lg:w-2/3 w-full">
      <h2 className="text-lg font-semibold text-white">
        {loading ? "Loading ..." : "Github user public repositories"}
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {list?.map((repo) => (
          <ResultItem repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
};
