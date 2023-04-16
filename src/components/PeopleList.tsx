import { PeopleData } from "../@types/swapi";
import { ListItem } from "./ListItem";
interface PeopleListProps {
  peopleData: PeopleData[];
}

export function PeopleList({ peopleData }: PeopleListProps) {
  return (
    <main className="grid gap-5 mt-11 sm:grid-cols-2 xl:grid-cols-3">
      {peopleData.map((person) => (
        <ListItem
          key={person.name}
          itemTitle={person.name}
          itemSubtitle={person.birth_year}
          to={`${person.name}`}
        />
      ))}
    </main>
  );
}
