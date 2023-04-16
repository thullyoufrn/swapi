import { MobileMenu } from "../components/MobileMenu";
import { Sidebar } from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

export function DefaultLayout() {
  const location = useLocation();

  return (
    <div className="bg-figma-gray-800 text-figma-gray-100 text-xs">
      <div
        className={
          `flex flex-col max-w-screen-2xl 
          ${location.pathname === "/"
            ? "max"
            : "min"}-h-screen 
          my-0 mx-auto p-4 overflow-x-hidden lg:flex-row`
        }
      >
        {/* <MobileMenu /> */}
        <Sidebar />

        <Outlet />
      </div>
    </div>
  );
}
