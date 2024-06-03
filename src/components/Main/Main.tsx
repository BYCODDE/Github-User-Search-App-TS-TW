
function Main() {
  return (
    <main className="rounded-[15px] bg-[#FEFEFE] shadow-custom p-[24px]">
      <div className="flex justify-start	 text-left	items-center	 gap-[20px]">
        <img src="./images/avatar.svg" alt="avatar" />
        <div>
          <h2 className="text-[#2B3442] text-[16px]">The Octocat</h2>
          <h3 className="font-[400] text-[#0079FF]">@octocat</h3>
          <h3 className="font-[400] text-[#697C9A]">Joined 25 Jan 2011</h3>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-[#4B6A9B] font-[400] leading-[25px] mt-[34px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <div className="flex justify-center items-center rounded-[10px] bg-[#F6F8FF]  p-[15px] gap-[20px] mt-[23px] mb-[24px]">
          <div className="flex flex-col">
            <span className="text-[#4B6A9B] font-[400]">Repos</span>
            <span>8</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#4B6A9B] font-[400]">Followers</span>
            <span>3938</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#4B6A9B] font-[400]">Following</span>
            <span>9</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main
