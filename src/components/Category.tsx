import { IconProps } from "phosphor-react";

interface CategoryProps {
  categoryIcon: IconProps;
  categoryTitle: string | null;
  categoryInfo: string;
}

export function Category({
  categoryIcon,
  categoryTitle,
  categoryInfo,
}: CategoryProps) {
  const originalString = categoryInfo;
  const capitalizedString = `${originalString
    .charAt(0)
    .toUpperCase()}${originalString.slice(1)}`;

  return (
    <div className="flex items-center justify-start gap-x-4">
      <>{categoryIcon}</>

      <div className="flex flex-col">
        <h2 className="text-base font-bold text-figma-gray-100">
          {categoryTitle}
        </h2>
        <span className="text-sm font-normal text-figma-gray-400">
          {categoryInfo?.length === 0 || categoryInfo === "n/a"
            ? "None"
            : capitalizedString}
        </span>
      </div>
    </div>
  );
}
