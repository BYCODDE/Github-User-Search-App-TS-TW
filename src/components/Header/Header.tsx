import Search from "../Search/Search";

type HeaderProps = {
  toggleDarkMode: () => void;
  darkMode: boolean;
  Username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
};

function Header({
  toggleDarkMode,
  darkMode,
  setUsername,
  handleSearch,
}: HeaderProps) {
  return (
    <header className="xl:max-w-[730px] xl:w-full">
      <div className="flex items-center text-center mb-[53px] justify-between">
        <h1
          className={`${
            darkMode ? "text-[#FFF]" : "text-[#222731]"
          } text-[26px] `}
        >
          devfinder
        </h1>

        {darkMode ? (
          <div
            className="flex justify-center align-center gap-[16px] cursor-pointer"
            onClick={toggleDarkMode}
          >
            <h2 className="tracking-[2.5px] text-[#FFF] hover:text-[#90A4D4]">
              LIGHT
            </h2>
            <img
              className={darkMode ? "filtered-svgTwo" : ""}
              src="./images/icon-sun.svg"
              alt="moon_svg"
            />
          </div>
        ) : (
          <div
            className="flex justify-center align-center gap-[16px]  cursor-pointer"
            onClick={toggleDarkMode}
          >
            <h2 className="tracking-[2.5px] text-[#4B6A9B] hover:text-[#222731]">
              DARK
            </h2>
            <img
              className={darkMode ? "" : "filtered-svg"}
              src="./images/icon-moon.svg"
              alt="moon_svg"
            />
          </div>
        )}
      </div>

      <Search
        darkMode={darkMode}
        setUsername={setUsername}
        handleSearch={handleSearch}
      />
    </header>
  );
}

export default Header;
