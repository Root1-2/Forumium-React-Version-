import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import Logout from "../components/Logout";

function Header() {
  return (
    <header>
      <nav className="border-gray-200 bg-blue-200 bg-transparent px-3 py-3 sm:px-6">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <NavLink to="/homepage" className="flex items-center">
              <Logo />
            </NavLink>
          </div>

          <div className="flex flex-row-reverse items-center gap-10 lg:order-2">
            <div
              className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <li>
                  <NavLink
                    to="/post"
                    className="lg:hover:text-primary-700 block border-b border-gray-700 py-2 pl-3 pr-4 text-gray-400 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent"
                  >
                    Forums
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    // to="/post"
                    className="lg:hover:text-primary-700 block border-b border-gray-700 py-2 pl-3 pr-4 text-gray-400 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="">
              <Logout />
            </div>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="h-6 w-6" />
              <FaTimes className="hidden h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
