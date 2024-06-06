import { dataTypes } from "../../App";
import dateFormat from "dateformat";
type MainProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  data: dataTypes | null;
};
function Main({ darkMode, data }: MainProps) {
  const formatDate = (dateString: string | undefined) => {
    const formattedDate = dateFormat(dateString, "d mmm yyyy");
    return `Joined ${formattedDate}`;
  };

  return (
    <main
      className={`${
        darkMode ? "bg-[#1E2A47]  " : "bg-[#FEFEFE] shadow-custom  "
      } rounded-[15px]   py-[32px] px-[24px] `}
    >
      <div className="flex justify-start	 text-left	items-center	 gap-[20px]">
        <img
          className="rounded-full w-[70px] h-[70px]"
          src={data?.avatar_url}
          alt="avatar"
        />

        <div>
          <h2
            className={`${
              darkMode ? "  text-[#FFF]  " : " text-[#2B3442] "
            } text-[16px] `}
          >
            {data?.name}
          </h2>
          <h3 className="font-[400] text-[#0079FF]">@{data?.login}</h3>
          <h3
            className={`${
              darkMode ? "  text-[#FFF]  " : " text-[#697C9A] "
            } font-[400]`}
          >
            {formatDate(data?.created_at)}
          </h3>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p
          className={`${
            darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
          } font-[400] leading-[25px] mt-[34px] `}
        >
          {data?.bio}
        </p>

        <div
          className={`${
            darkMode ? "  bg-[#141D2F]  " : " bg-[#F6F8FF] "
          } flex justify-center items-center rounded-[10px] p-[15px] gap-[25px] mt-[23px] mb-[24px] text-[16px]`}
        >
          <div className="flex flex-col">
            <span
              className={`${
                darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
              } font-[400]  text-[11px]`}
            >
              Repos
            </span>
            <span
              className={`${
                darkMode ? "  text-[#FFF]  " : " text-[#2B3442] "
              }  `}
            >
              {data?.public_repos}
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className={`${
                darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
              } font-[400]  text-[11px]`}
            >
              Followers
            </span>
            <span
              className={`${
                darkMode ? "  text-[#FFF]  " : " text-[#2B3442] "
              }  `}
            >
              {data?.followers}
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className={`${
                darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
              } font-[400]  text-[11px]`}
            >
              Following
            </span>
            <span
              className={`${
                darkMode ? "  text-[#FFF]  " : " text-[#2B3442] "
              }  `}
            >
              {data?.following}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start  gap-[7px]">
        <div
          className={`${
            data?.location === null ? "opacity-[0.5]" : ""
          } flex gap-[20px] items-center`}
        >
          <img
            className={darkMode ? "filtered-element" : ""}
            src="images/icon-location.svg"
            alt="location_svg"
          />

          <p
            className={`${
              darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
            }  font-[400] ml-[5px]`}
          >
            {data?.location === null ? "Not Available" : data?.location}
          </p>
        </div>
        <div
          className={`${
            data?.blog === "" ? "opacity-[0.5]" : ""
          } flex gap-[20px] items-center`}
        >
          <img
            className={darkMode ? "filtered-element" : ""}
            src="images/icon-website.svg"
            alt="website_svg"
          />
          <p
            className={`${
              darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
            }  font-[400]`}
          >
            {data?.blog === "" ? "Not Available" : data?.blog}
          </p>
        </div>
        <div
          className={`${
            data?.twitter_username === null ? "opacity-[0.5]" : ""
          } flex gap-[20px] items-center`}
        >
          <img
            className={darkMode ? "filtered-element" : ""}
            src="images/icon-twitter.svg"
            alt="twitter_svg"
          />
          <p
            className={`${
              darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
            }  font-[400]`}
          >
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
          <img
            className={darkMode ? "filtered-element" : ""}
            src="images/icon-company.svg"
            alt="company_svg"
          />
          <p
            className={`${
              darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
            }  font-[400]`}
          >
            {data?.company === null ? "Not Available" : data?.company}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
