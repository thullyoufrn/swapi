import { StarshipsData } from "../@types/swapi";
import { ListItem } from "./ListItem";
interface StarshipsListProps {
  starshipsData: StarshipsData[];
}

export function StarshipsList({ starshipsData }: StarshipsListProps) {
  return (
    <main className="grid gap-5 mt-11 sm:grid-cols-2 xl:grid-cols-3">
      {starshipsData.map((starship) => (
        <ListItem
          key={starship.name}
          itemTitle={starship.name}
          itemSubtitle={starship.model}
          to={`${starship.name}`}
        />
      ))}
    </main>
  );
}
