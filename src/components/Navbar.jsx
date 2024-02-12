import { Link } from "react-router-dom";

import Logo from "/logo.svg";
import LogoDark from "/logo-dark.svg";

import SearchBar from "./SearchBar";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2.5">
      <div>
        <Link to="/" className="dark:hidden">
          <img src={Logo} alt="Logo" className="h-[2.8125rem] w-[2.8125rem]" />
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
