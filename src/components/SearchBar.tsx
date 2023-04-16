import { ChangeEvent } from "react";
import { useLocation } from "react-router-dom"

interface SearchBarProps {
  handleSearchBarChange: (event: ChangeEvent<HTMLTextAreaElement>) => object | void;
  searchBarContent: string;
}

export function SearchBar({ handleSearchBarChange, searchBarContent }: SearchBarProps) {
  const location = useLocation()
  const locationPathname = location.pathname.substring(1)

  return (
    <form className="mt-11 pl-5 py-4 pr-4 border-[1px] rounded-lg border-figma-gray-500 flex justify-between items-center gap-4 focus-within:border-figma-green-100">
      <textarea
        className="text-figma-gray-400 flex-grow resize-none bg-figma-gray-800 h-5 outline-none overflow-hidden focus-within:text-figma-gray-100"           
        placeholder={`Search for ${locationPathname}`}
        onChange={handleSearchBarChange}
        value={searchBarContent}
      >
      </textarea>
    </form>
  )
}
