import { List, StarFour } from "phosphor-react";

export function MobileMenu() {
  return (
    <nav className="flex justify-between p-4 lg:hidden">
      {/* <div className="flex items-center justify-center gap-3 text-xl font-bold text-figma-purple-gradient">
        <StarFour size={28} weight="bold"/>
        <span className="bg-gradient-to-r from-figma-green-gradient to-figma-purple-gradient text-figma-green-100/0 bg-clip-text text-2xl">Swapi</span>
      </div> */}

      <List size={32} weight="bold" className="text-figma-gray-100" />
    </nav>
  )
}
