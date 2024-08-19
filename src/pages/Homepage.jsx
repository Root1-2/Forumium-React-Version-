import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

import banner from "../images/bannerImg.png";

function Homepage() {
  return (
    <div className="flex h-screen flex-wrap items-center justify-between gap-10 overflow-y-auto px-0 pb-52 sm:gap-0 sm:px-20">
      <div className="w-[50rem]">
        <Logo />
        <h1 className="my-4 text-3xl font-semibold text-white sm:text-6xl">
          Connectivity is the Key
        </h1>
        <p className="mb-5 text-xl text-white">
          A Forum web application for user to create discussion with other
          users. Contains varietys of user discussion topics for you to interact
          with other
        </p>
        <NavLink to="/post">
          <Button>Browse Topics</Button>
        </NavLink>
      </div>

      <div>
        <img src={banner} className="ms-16 w-56 sm:ms-0" alt="banner" />
      </div>
    </div>
  );
}

export default Homepage;
