import { Grape, Blend } from './grape';
import { Country } from './country';

export class Wine {
      id: number;
      wine:{
    name: string;
    vintage: number;
    colour: string;
    shortDesc: string;
    imageUrl: string;
    country: Country;
    blend: Blend[];
      }
  constructor(
    id: number,
    wine: {
    name: string,
    vintage: number,
    colour: string,
    shortDesc: string,
    imageUrl: string,
    country: Country,
    blend: Blend[]
    })
    { }

}