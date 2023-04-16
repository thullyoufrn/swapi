import { ChangeEvent, useState } from "react";
import { StarshipsData } from "../@types/swapi";
import { ListItem } from "./ListItem";
import { SearchBar } from "./SearchBar";
interface StarshipsListProps {
  starshipsData: StarshipsData[];
}

export function StarshipsList({ starshipsData }: StarshipsListProps) {
  const [searchBarContent, setSearchBarContent] = useState("")

  function handleSearchBarChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setSearchBarContent(event.target.value)
  }

  return (
    <section>
      <SearchBar 
        handleSearchBarChange={handleSearchBarChange} 
        searchBarContent={searchBarContent} 
      />

      <main className="grid gap-5 mt-11 sm:grid-cols-2 xl:grid-cols-3">
        {starshipsData.map((starship) => (
          starship.name.includes(searchBarContent)
            && <ListItem
                key={starship.name}
                itemTitle={starship.name}
                itemSubtitle={starship.model}
                to={`${starship.name}`}
              />                
        ))}
      </main>
    </section>

  );
}
