import { TRepository } from "@/types/requests";
import Link from "next/link";

type Props = {
  repo?: TRepository;
};

export const ResultItem = ({ repo }: Props) => {
  return (
    <Link
      href={`/repo/${repo?.owner?.login}/${repo?.name}`}
      className="flex overflow-hidden flex-col justify-between h-28 hover:cursor-pointer hover:bg-slate-100 duration-300 transition-colors bg-slate-200 rounded-md p-4 text-slate-800"
    >
      <h3 className="text-slate-900 font-semibold text-lg truncate">
        {repo?.name}
      </h3>

      <div className="flex gap-2 items-center truncate">
        <span>
          Forks: <b data-testid="forks">{repo?.forks}</b>
        </span>
        <span>
          Open Issues: <b data-testid="open_issues">{repo?.open_issues}</b>
        </span>
      </div>
    </Link>
  );
};
