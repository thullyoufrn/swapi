import { User } from "phosphor-react";

export function CategoryItem() {
  return (
    <div className="flex items-center justify-start py-4 gap-x-4">
      <User size={24} weight="bold" />

      <div className="flex flex-col">
        <h2 className="text-base font-bold text-figma-gray-100">Category</h2>
        <span className="text-sm font-normal text-figma-gray-400">
          Information
        </span>
      </div>
    </div>
  );
}
