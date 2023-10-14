import { IconProps, User } from "phosphor-react";
import { Return } from "./Return";

interface HeaderProps {
  icon: IconProps;
  title: string;
  returnButton?: boolean;
}

export function Header({ icon, title, returnButton }: HeaderProps) {
  return (
    <header className="flex items-center gap-5">
      {returnButton && <Return />}

      <div className="flex items-center justify-start gap-3 text-2xl font-bold">
        <>{icon}</>
        <h1>{title}</h1>
      </div>
    </header>
  );
}
