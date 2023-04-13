import { IconProps } from "phosphor-react";

interface PeopleCategoryProps {
  categoryIcon: IconProps;
  categoryTitle: string | null;
  categoryInfo: string | string[] | null;
}

export function PeopleCategory({
  categoryIcon,
  categoryTitle,
  categoryInfo,
}: PeopleCategoryProps) {
  return (
    <div className="flex items-center justify-start mb-8 gap-x-4">
      <>{categoryIcon}</>

      <div className="flex flex-col">
        <h2 className="text-base font-bold text-figma-gray-100">
          {categoryTitle}
        </h2>
        <span className="text-sm font-normal text-figma-gray-400">
          {categoryInfo?.length === 0 || categoryInfo === "n/a"
            ? "None"
            : categoryInfo}
        </span>
      </div>
    </div>
  );
}
