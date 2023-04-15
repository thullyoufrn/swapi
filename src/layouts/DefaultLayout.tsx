import { Sidebar } from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

export function DefaultLayout() {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/"
          ? "flex max-w-screen max-h-screen p-4 bg-figma-gray-800 text-figma-gray-100 overflow-x-hidden"
          : "flex max-w-screen min-h-screen p-4 bg-figma-gray-800 text-figma-gray-100 overflow-x-hidden"
      }
    >
      <Sidebar />

      <Outlet />
    </div>
  );
}
