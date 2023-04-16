import { NavLink } from "react-router-dom";
import { StarFour } from "phosphor-react";

export function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 min-h-[calc(100vh-2rem)] gap-[6rem] lg:flex-row">
      <img
        className="max-h-[90%] rounded-3xl max-lg:hidden"
        src="https://i.pinimg.com/564x/07/63/a2/0763a214371187810188dce963dbd678.jpg"
        alt="star wars wallpaper"
      />

      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex items-center justify-center gap-3 text-7xl font-bold text-figma-purple-gradient">
          <StarFour size={80} weight="bold"/>
          <span className="bg-gradient-to-r from-figma-green-gradient to-figma-purple-gradient text-figma-green-100/0 bg-clip-text">Swapi</span>
        </div>

        <h1 className="text-4xl font-semibold max-w-md text-center text-figma-gray-300">The platform where you explore the amazing world of Star Wars</h1>

        <div className="flex gap-10">
          <NavLink
            to={"/people"}
            className="flex items-center justify-center px-12 py-4 text-lg font-bold rounded-md cursor-pointer bg-figma-gray-600 text-figma-purple-100 hover:bg-figma-gray-500 hover:text-figma-gray-200 transition-all duration-300"
          >
            People
          </NavLink>

          <NavLink
            to={"/starships"}
            className="flex items-center justify-center px-12 text-lg font-bold rounded-md cursor-pointer bg-figma-gray-600 text-figma-purple-100 hover:bg-figma-gray-500 hover:text-figma-gray-200 transition-all duration-300"
          >
            Starships
          </NavLink>
        </div>
      </div>
    </main>
  );
}
