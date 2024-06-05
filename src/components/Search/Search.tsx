// import { dataTypes } from "../../App";

type SearchProps = {
  darkMode: boolean;
  // data: dataTypes | null;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
};

function Search({ darkMode,  setUsername }: SearchProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching...");
  };

  return (
    <div
      className={`${
        darkMode ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"
      } mb-[16px] flex justify-center items-center gap-[8px] rounded-[15px] bg- shadow-custom py-[7px] pr-[7px] pb-[7px] pl-[16px]  `}
    >
      <img src="./images/icon-search.svg" alt="icon-search" />
      <input
        type="search"
        name=""
        id=""
        placeholder="Search Github username..."
        className={`${
          darkMode
            ? "bg-[#1E2A47] placeholder:text-[#FFF] placeholder:opacity-90 "
            : "bg-[#FEFEFE] placeholder:text-[#4B6A9B]  "
        } w-[100%] placeholder:text-[14px]  placeholder:font-[400] `}
        onChange={handleChange}
      />
      <button
        className="text-[14px] text-[#FFF] bg-[#0079FF] rounded-[10px] p-4  w-[84px]  h-[46px]  flex justify-center items-center tracking-[0.5px]"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
