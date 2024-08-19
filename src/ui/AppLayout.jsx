import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <div className="m-7 h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
