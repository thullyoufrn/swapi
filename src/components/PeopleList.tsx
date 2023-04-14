import { PeopleData } from "../@types/swapi";
import { ListItem } from "./ListItem";
interface PeopleListProps {
  peopleData: PeopleData[];
}

export function PeopleList({ peopleData }: PeopleListProps) {
  return (
    <main className="grid grid-cols-3 gap-5 mt-11">
      {peopleData.map((person) => (
        <ListItem
          key={person.name}
          itemTitle={person.name}
          itemSubtitle={person.homeworld}
          to={`/${person.name}`}
        />
      ))}
    </main>
  );
}
