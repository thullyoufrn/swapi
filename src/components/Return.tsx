import { CaretLeft } from "phosphor-react";
import { NavLink, useLocation } from "react-router-dom";

export function Return() {
  const location = useLocation();
  const locationSplited = location.pathname.split("/");

  locationSplited.pop();

  console.log(locationSplited);

  const anteriorLocation = locationSplited?.reduce((acc, path) => {
    return acc + path;
  }, "/");

  console.log(anteriorLocation);

  return (
    <NavLink
      to={anteriorLocation}
      title="Back"
      className="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer bg-figma-gray-600 text-figma-purple-100 hover:text-figma-gray-200 hover:bg-figma-gray-500 transition-all duration-300"
    >
      <CaretLeft size={24} />
    </NavLink>
  );
}
