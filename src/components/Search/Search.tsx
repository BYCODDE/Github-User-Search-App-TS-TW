function Search() {
  return (
    <div className="flex justify-center items-center gap-[8px] rounded-[15px] bg-[#FEFEFE] shadow-custom py-[7px] pr-[7px] pb-[7px] pl-[16px] ">
      <img src="./images/icon-search.svg" alt="icon-search" />
      <input
        type="search"
        name=""
        id=""
        placeholder="Search Github username..."
        className="w-[100%]  "
      />
      <button className="text-[14px] text-[#FFF] bg-[#0079FF] rounded-[10px] p-4  w-[84px]  h-[46px]  flex justify-center items-center">
        Search
      </button>
    </div>
  );
}

export default Search;
