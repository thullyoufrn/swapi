import { NavLink } from "react-router-dom";

interface ListItemProps {
  itemTitle: string;
  itemSubtitle: string;
  to: string;
}

export function ListItem({ itemTitle, itemSubtitle, to }: ListItemProps) {
  const originalString = itemSubtitle;
  const capitalizedString = `${originalString
    .charAt(0)
    .toUpperCase()}${originalString.slice(1)}`;

  return (
    <NavLink
      to={to}
      className="flex flex-col items-start justify-center px-5 py-4 border-2 rounded-lg border-figma-gray-700 bg-figma-gray-700 hover:border-2 hover:border-figma-gray-600 hover:scale-105 transition-all duration-200"
    >
      <h2 className="text-base font-bold text-figma-gray-100">{itemTitle}</h2>
      <span className="text-sm font-normal text-figma-gray-400">
        {capitalizedString}
      </span>
    </NavLink>
  );
}
