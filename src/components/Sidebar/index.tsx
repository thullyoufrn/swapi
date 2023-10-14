import { Binoculars, House, StarFour, User } from "phosphor-react"
import { NavLink } from "react-router-dom"
import "./Sidebar.css"
import Item from "./Item"

export function Sidebar() {
  return (
    <aside
      className={
        location.pathname === "/"
          ? "hidden"
          : "text-base flex-col justify-center max-h-screen minus-2rem p-10 w-60 bg-figma-gray-700 rounded-xl bg-gradient-to-t from-figma-green-300/40 to-figma-purple-200/40 max-lg:hidden"
      }
    >
      <NavLink to="/" title="Home">
        <div className="flex items-center justify-center gap-3 mb-16 text-xl font-bold text-figma-purple-gradient">
          <StarFour size={24} weight="bold"/>
          <span className="bg-gradient-to-r from-figma-green-gradient to-figma-purple-gradient text-figma-green-100/0 bg-clip-text">Swapi</span>
        </div>
      </NavLink>

      <nav className="flex flex-col items-start text-figma-gray-400 gap-7">
        <Item 
          title="Home" 
          itemPathname="/" 
          iconSelected={<House size={24} weight="bold" />} 
          iconDiselected={<House size={24} weight="regular" />}
        />

        <Item 
          title="People" 
          itemPathname="/people" 
          iconSelected={<User size={24} weight="bold" />} 
          iconDiselected={<User size={24} weight="regular" />}
        />

        <Item 
          title="Starships" 
          itemPathname="/starships" 
          iconSelected={<Binoculars size={24} weight="bold" />} 
          iconDiselected={<Binoculars size={24} weight="regular" />}
        />
      </nav>
    </aside>
  )
}
