import Search from "../Search/Search";

function Header() {
  return (
    <header>
      <div className="flex items-center text-center">
        <h1 className="text-[26px] text-[#222731]">devfinder</h1>
        <div className="flex justify-center align-center gap-[16px]">
          <h2 className="tracking-[2.5px] text-[#4B6A9B]">DARK</h2>
          <img src="./images/icon-moon.svg" alt="moon_svg" />
        </div>
      </div>

      <Search />
    </header>
  );
}

export default Header;
