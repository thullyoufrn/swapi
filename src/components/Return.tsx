import { CaretLeft } from "phosphor-react";

export function Return() {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer bg-figma-gray-600 text-figma-purple-100 hover:bg-figma-gray-500 ">
      <CaretLeft size={24} />
    </div>
  );
}
