import { Outlet } from "react-router-dom";
import Header from "./Header";
import bg from "../images/bg.jpg";

function AppLayout() {
  return (
    <div
      className="absolute inset-0 h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <div className="m-7 h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
