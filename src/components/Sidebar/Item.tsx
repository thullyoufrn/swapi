import { ReactNode } from "react"
import { NavLink, useLocation } from "react-router-dom"

interface ItemProps {
  itemPathname: string
  title: string
  iconSelected: ReactNode
  iconDiselected: ReactNode
}

export default function Item({
  itemPathname, 
  title, 
  iconSelected, 
  iconDiselected 
}: ItemProps) {
  const location = useLocation()
  const appPathname = location.pathname

  return (
    <NavLink to={itemPathname} title={title}>
      <div className="group flex self-start gap-4 p-1 transition-all duration-300">
        <div
          className={`w-1 rounded-full mr-2 transition-all duration-300 ${
            appPathname === itemPathname || appPathname === itemPathname
              ? "bg-gradient-to-b from-figma-green-gradient to-figma-purple-gradient"
              : null
          }`}
        />

        <div
          className={`flex gap-2 transition-all duration-300 ${
            appPathname === itemPathname || appPathname === itemPathname
              ? "text-figma-gray-100"
              : null
          }`}
        >
          {appPathname.includes(itemPathname) || appPathname === itemPathname
            ? iconSelected
            : iconDiselected}

          <span>{title}</span>
        </div>
      </div>
    </NavLink>
  )
}
