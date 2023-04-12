import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div className="flex w-screen min-h-screen p-4 bg-figma-gray-800 text-figma-gray-100">
      <Sidebar />
      <Outlet />
    </div>
  );
}
