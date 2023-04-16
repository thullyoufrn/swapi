import { ChangeEvent, useState } from "react";
import { PeopleData } from "../@types/swapi";
import { ListItem } from "./ListItem";
import { SearchBar } from "./SearchBar";
interface PeopleListProps {
  peopleData: PeopleData[];
}

export function PeopleList({ peopleData }: PeopleListProps) {
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
        {peopleData.map((person) => (
          person.name.includes(searchBarContent)
            && <ListItem
                key={person.name}
                itemTitle={person.name}
                itemSubtitle={person.birth_year}
                to={`${person.name}`}
              />
        ))}
      </main>
    </section>
  );
}
