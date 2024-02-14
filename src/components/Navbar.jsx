import { Link } from "react-router-dom";

import Logo from "/logo.svg";
import LogoDark from "/logo-dark.svg";

import SearchBar from "./SearchBar";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2.5">
      <div>
        <Link to="/" className="flex items-center gap-2  dark:hidden">
          <img src={Logo} alt="Logo" className="h-[2.8125rem] w-[2.8125rem]" />
          <span className="hidden text-xl font-bold sm:block">ViewTube</span>
        </Link>
        <Link to="/" className="hidden dark:block">
          <img
            src={LogoDark}
            alt="Logo"
            className="h-[2.8125rem] w-[2.8125rem]"
          />
        </Link>
      </div>
      <SearchBar />
      <ModeToggle />
    </nav>
  );
};
export default Navbar;
