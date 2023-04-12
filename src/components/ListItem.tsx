import { NavLink } from "react-router-dom";

interface ListItemProps {
  itemName: string;
  itemSubname: string;
  to?: string;
}

export function ListItem({ itemName, itemSubname, to = "/" }: ListItemProps) {
  return (
    <NavLink
      to={to}
      className="flex flex-col items-start justify-center px-5 py-4 border-2 rounded-lg border-figma-gray-700 bg-figma-gray-700 hover:border-2 hover:border-figma-gray-600"
    >
      <h2 className="text-base font-bold text-figma-gray-100">{itemName}</h2>
      <span className="text-sm font-normal text-figma-gray-400">
        {itemSubname}
      </span>
    </NavLink>
  );
}
