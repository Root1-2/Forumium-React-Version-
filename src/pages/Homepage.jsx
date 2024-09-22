import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

import banner from "../images/bannerImg.png";

function Homepage() {
  return (
    <div className="flex h-screen flex-wrap items-center justify-between gap-10 overflow-y-auto px-0 pb-48 sm:gap-0 sm:px-20">
      <div className="w-[50rem]">
        <div className="hidden sm:block">
          <Logo />
        </div>
        <h1 className="my-4 text-center text-3xl font-semibold text-white sm:text-6xl md:text-start">
          Connectivity is the Key
        </h1>
        <p className="mb-5 text-center text-xl text-white md:text-start">
          A Forum web application for user to create discussion with other
          users. Contains varietys of user discussion topics for you to interact
          with other
        </p>
        <NavLink to="/post">
          <div className="flex justify-center sm:justify-start">
            <Button>Browse Topics</Button>
          </div>
        </NavLink>
      </div>

      <img src={banner} className="ms-16 w-56 sm:ms-20" alt="banner" />
    </div>
  );
}

export default Homepage;
