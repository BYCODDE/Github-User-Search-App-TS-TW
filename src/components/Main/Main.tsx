import { dataTypes } from "../../App";
import dateFormat from "dateformat";
type MainProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  data: dataTypes | null;
};
function Main({ darkMode, toggleDarkMode, data }: MainProps) {
  const formatDate = (dateString:string) => {
    const formattedDate = dateFormat(dateString, "d mmm yyyy");
    return `Joined ${formattedDate}`;
  };

  return (
    <main className="rounded-[15px] bg-[#FEFEFE] shadow-custom p-[24px]">
      <div className="flex justify-start	 text-left	items-center	 gap-[20px]">
        <img src="./images/avatar.svg" alt="avatar" />
        <div>
          <h2 className="text-[#2B3442] text-[16px]">{data?.name}</h2>
          <h3 className="font-[400] text-[#0079FF]">@{data?.login}</h3>
          <h3 className="font-[400] text-[#697C9A]">
            {formatDate(data?.created_at)}
          </h3>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-[#4B6A9B] font-[400] leading-[25px] mt-[34px]">
          {data?.bio}
        </p>
        <div className="flex justify-center items-center rounded-[10px] bg-[#F6F8FF]  p-[15px] gap-[20px] mt-[23px] mb-[24px]">
          <div className="flex flex-col">
            <span className="text-[#4B6A9B] font-[400]">Repos</span>
            <span>{data?.public_repos}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#4B6A9B] font-[400]">Followers</span>
            <span>{data?.followers}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#4B6A9B] font-[400]">Following</span>
            <span>{data?.following}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start  gap-[7px]">
        <div
          className={`${
            data?.location === null ? "opacity-[0.5]" : ""
          } flex gap-[20px] items-center`}
        >
          <img src="images/icon-location.svg" alt="location_svg" />
          <p className="text-[#4B6A9B] font-[400]">
            {data?.location === null ? "Not Available" : data?.location}
          </p>
        </div>
        <div
          className={`${
            data?.blog === "" ? "opacity-[0.5]" : ""
          } flex gap-[20px] items-center`}
        >
          <img src="images/icon-website.svg" alt="website_svg" />
          <p className="text-[#4B6A9B] font-[400]">
            {data?.blog === "" ? "Not Available" : data?.blog}
          </p>
        </div>
        <div
          className={`${
            data?.twitter_username === null ? "opacity-[0.5]" : ""
          } flex gap-[20px] items-center`}
        >
          <img src="images/icon-twitter.svg" alt="twitter_svg" />
          <p className="text-[#4B6A9B] font-[400]">
            {data?.twitter_username === null
              ? "Not Available"
              : data?.twitter_username}
          </p>
        </div>
        <div
          className={`${
            data?.company === null ? "opacity-[0.5]" : ""
          } flex gap-[20px] items-center`}
        >
          <img src="images/icon-company.svg" alt="company_svg" />
          <p className="text-[#4B6A9B] font-[400]">
            {data?.company === null ? "Not Available" : data?.company}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
