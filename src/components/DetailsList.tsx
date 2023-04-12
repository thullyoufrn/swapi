import { User } from "phosphor-react";
import { CategoryItem } from "./CategoryItem";
import { Header } from "./Header";

export function DetailsList() {
  return (
    <div className="flex flex-col mt-11">
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </div>
  );
}
