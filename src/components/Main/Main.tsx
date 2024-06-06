import { dataTypes } from "../../App";
import dateFormat from "dateformat";
import { useMediaQuery } from "@uidotdev/usehooks";
type MainProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  data: dataTypes | null;
};
function Main({ darkMode, data }: MainProps) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const formatDate = (dateString: string | undefined) => {
    const formattedDate = dateFormat(dateString, "d mmm yyyy");
    return `Joined ${formattedDate}`;
  };

  return (
    <main
      className={`${
        darkMode ? "bg-[#1E2A47]  " : "bg-[#FEFEFE] shadow-custom  "
      } rounded-[15px]   py-[32px] px-[24px] md:h-[481px] xl:max-w-[730px]`}
    >
      <div className="flex justify-start	 text-left	items-center	 gap-[20px] md:gap-[41px]">
        <img
          className="rounded-full w-[70px] h-[70px] md:w-[117px]  md:h-[117px]    "
          src={data?.avatar_url}
          alt="avatar"
        />

        <div>
          <h2
            className={`${
              darkMode ? "  text-[#FFF]  " : " text-[#2B3442] "
            } text-[16px] md:text-[26px]`}
          >
            {data?.name}
          </h2>
          <h3 className="font-[400] text-[#0079FF] md:text-[16px]">
            @{data?.login}
          </h3>
          <h3
            className={`${
              darkMode ? "  text-[#FFF]  " : " text-[#697C9A] "
            } font-[400]  md:text-[15px]`}
          >
            {formatDate(data?.created_at)}
          </h3>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col ">
        <p
          className={`${
            darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
          } font-[400] leading-[25px] mt-[34px] md:text-[15px]`}
        >
          {data?.bio}
        </p>

        <div
          className={`${
            darkMode ? "  bg-[#141D2F]  " : " bg-[#F6F8FF] "
          } flex justify-around items-center rounded-[10px] p-[15px] gap-[25px] mt-[23px] mb-[24px] text-[16px] w-full max-w-[279px] md:max-w-[493px]`}
        >
          <div className="flex flex-col">
            <span
              className={`${
                darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
              } font-[400]  text-[11px] md:text-[13px]`}
            >
              Repos
            </span>
            <span
              className={`${
                darkMode ? "  text-[#FFF]  " : " text-[#2B3442] "
              } md:text-[22px] `}
            >
              {data?.public_repos}
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className={`${
                darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
              } font-[400]  text-[11px] md:text-[13px]`}
            >
              Followers
            </span>
            <span
              className={`${
                darkMode ? "  text-[#FFF]  " : " text-[#2B3442] "
              } md:text-[22px] `}
            >
              {data?.followers}
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className={`${
                darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
              } font-[400]  text-[11px] md:text-[13px]`}
            >
              Following
            </span>
            <span
              className={`${
                darkMode ? "  text-[#FFF]  " : " text-[#2B3442] "
              } md:text-[22px] `}
            >
              {data?.following}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start  gap-[7px]  md:grid md:grid-cols-2 md:grid-rows-2 md:gap-[17px]">
        <div
          className={`${
            data?.location === null ? "opacity-[0.5]" : ""
          } flex gap-[20px] items-center  md:justify-center md:text-[15px] xl:ml-[10px]`}
        >
          <img
            className={darkMode ? "filtered-element" : ""}
            src="images/icon-location.svg"
            alt="location_svg"
          />

          <p
            className={`${
              darkMode ? "  text-[#FFF]  " : " text-[#4B6A9B] "
            }  font-[400] ml-[5px] md:ml-0`}
          >
            {data?.location === null ? "Not Available" : data?.location}
          </p>
        </div>
        {isSmallDevice ? (
          <>
            <div
              className={`${
                data?.blog === "" ? "opacity-[0.5]" : ""
              } flex gap-[20px] items-center md:justify-center md:text-[15px]`}
            >
              <img
                className={darkMode ? "filtered-element" : ""}
                src="images/icon-website.svg"
                alt="website_svg"
              />
              <p
                className={`${
                  darkMode ? "text-white" : "text-[#4B6A9B]"
                } font-[400]`}
              >
                {data?.blog === "" ? "Not Available" : data?.blog}
              </p>
            </div>
            <div
              className={`${
                data?.twitter_username === null ? "opacity-[0.5]" : ""
              } flex gap-[20px] items-center md:justify-center md:text-[15px]`}
            >
              <img
                className={darkMode ? "filtered-element" : ""}
                src="images/icon-twitter.svg"
                alt="twitter_svg"
              />
              <p
                className={`${
                  darkMode ? "text-white" : "text-[#4B6A9B]"
                } font-[400]`}
              >
                {data?.twitter_username === null
                  ? "Not Available"
                  : data?.twitter_username}
              </p>
            </div>
          </>
        ) : (
          <>
            <div
              className={`${
                data?.twitter_username === null ? "opacity-[0.5]" : ""
              } flex gap-[20px] items-center md:justify-center md:text-[15px]`}
            >
              <img
                className={darkMode ? "filtered-element" : ""}
                src="images/icon-twitter.svg"
                alt="twitter_svg"
              />
              <p
                className={`${
                  darkMode ? "text-white" : "text-[#4B6A9B]"
                } font-[400]`}
              >
                {data?.twitter_username === null
                  ? "Not Available"
                  : data?.twitter_username}
              </p>
            </div>
            <div
              className={`${
                data?.blog === "" ? "opacity-[0.5]" : ""
              } flex gap-[20px] items-center md:justify-center md:text-[15px]`}
            >
              <img
                className={darkMode ? "filtered-element" : ""}
                src="images/icon-website.svg"
                alt="website_svg"
              />
              <p
                className={`${
                  darkMode ? "text-white" : "text-[#4B6A9B]"
                } font-[400]`}
              >
                {data?.blog === "" ? "Not Available" : data?.blog}
              </p>
            </div>
          </>
        )}

        <div
          className={`${
            data?.company === null ? "opacity-[0.5]" : ""
          } flex gap-[20px] items-center md:justify-center  md:text-[15px]`}
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
