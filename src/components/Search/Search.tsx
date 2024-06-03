function Search() {
  return (
    <div className=" mb-[16px] flex justify-center items-center gap-[8px] rounded-[15px] bg-[#FEFEFE] shadow-custom py-[7px] pr-[7px] pb-[7px] pl-[16px] ">
      <img src="./images/icon-search.svg" alt="icon-search" />
      <input
        type="search"
        name=""
        id=""
        placeholder="Search Github username..."
        className="w-[100%] placeholder:text-[#4B6A9B] placeholder:font-[400] placeholder:text-[14px]"
      />
      <button className="text-[14px] text-[#FFF] bg-[#0079FF] rounded-[10px] p-4  w-[84px]  h-[46px]  flex justify-center items-center tracking-[0.5px]">
        Search
      </button>
    </div>
  );
}

export default Search;
