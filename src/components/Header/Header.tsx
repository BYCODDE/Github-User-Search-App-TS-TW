import Search from "../Search/Search";
import { dataTypes } from "../../App";

type HeaderProps = {
  toggleDarkMode: () => void;
  darkMode: boolean;
  data: dataTypes | null;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  Username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
};

function Header({
  toggleDarkMode,
  darkMode,
  data,
  setUsername,
}: HeaderProps) {
  return (
    <header className="">
      <div className="flex items-center text-center mb-[53px] justify-between">
        <h1 className="text-[26px] text-[#222731]">devfinder</h1>
        <div
          className="flex justify-center align-center gap-[16px]"
          onClick={toggleDarkMode}
        >
          <h2 className="tracking-[2.5px] text-[#4B6A9B]">DARK</h2>
          <img src="./images/icon-moon.svg" alt="moon_svg" />
        </div>
      </div>

      <Search
        data={data}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        setUsername={setUsername}
      />
    </header>
  );
}

export default Header;
