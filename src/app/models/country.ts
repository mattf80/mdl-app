export class Country {
  id: number;
  name: string;
}

export class Region {
  id: number;
  region: {
    name: string;
    country: Country;
  }
}