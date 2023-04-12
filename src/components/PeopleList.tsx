import { ListItem } from "./ListItem";

// Add API request to dynamically change the list items

export function PeopleList() {
  return (
    <main className="grid grid-cols-3 gap-5 mt-11">
      <ListItem
        itemName="Thullyo Damasceno"
        itemSubname="Frontend Developer"
        to="/details"
      />
      <ListItem itemName="Thullyo Damasceno" itemSubname="Frontend Developer" />
      <ListItem itemName="Thullyo Damasceno" itemSubname="Frontend Developer" />
      <ListItem itemName="Thullyo Damasceno" itemSubname="Frontend Developer" />
    </main>
  );
}
