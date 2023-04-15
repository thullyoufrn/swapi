export interface PeopleData {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created: string;
  edited: string;
  url: string;
}

export interface StarshipsData {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots?: string[];
  films?: string[];
  created: string;
  edited: string;
  url: string;
}
