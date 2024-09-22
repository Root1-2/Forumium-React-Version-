import { Outlet } from "react-router-dom";
import Header from "./Header";
import bg from "../images/bg.jpg";

function AppLayout() {
  return (
    <div
      className="absolute inset-0 h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <div className="mx-5 h-screen sm:mx-0">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
