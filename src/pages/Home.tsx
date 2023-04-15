import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <main className="flex items-center justify-center flex-1 max-h-full gap-16 py-12 pl-24 pr-20">
      <img
        className="max-h-full rounded-3xl"
        src="https://i.pinimg.com/564x/07/63/a2/0763a214371187810188dce963dbd678.jpg"
        // src="https://i.pinimg.com/564x/83/ba/d4/83bad475be8afb4a7065808fe15faf33.jpg"
        alt="star wars wallpaper"
      />

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Explore the amazing</h1>
          <h1 className="text-5xl font-bold">world of Star Wars</h1>
        </div>

        <div className="flex gap-10">
          <NavLink
            to={"/people"}
            className="flex items-center justify-center px-12 py-4 text-lg font-bold rounded-md cursor-pointer bg-figma-gray-600 text-figma-purple-100 hover:bg-figma-gray-500 "
          >
            People
          </NavLink>

          <NavLink
            to={"/starships"}
            className="flex items-center justify-center px-12 text-lg font-bold rounded-md cursor-pointer bg-figma-gray-600 text-figma-purple-100 hover:bg-figma-gray-500 "
          >
            Starships
          </NavLink>
        </div>
      </div>
    </main>
  );
}
