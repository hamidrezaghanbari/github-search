import { ChangeEvent } from "react";

type Props = {
  user: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ user, handleInputChange }: Props) => {
  return (
    <div className="flex w-full lg:w-2/3 bg-white h-10 px-4 rounded-md text-slate-600 font-semibold text-xl">
      <input
        name="search"
        value={user}
        onChange={handleInputChange}
        className="bg-transparent border-none outline-none w-full"
        placeholder="Search for Github user ..."
      />
    </div>
  );
};
