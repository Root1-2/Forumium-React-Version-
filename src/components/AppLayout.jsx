import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="p-10">
      <Outlet />
    </div>
  );
}

export default AppLayout;
