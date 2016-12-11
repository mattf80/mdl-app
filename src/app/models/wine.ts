import { Grape, Blend } from './grape';
import { Country, Region } from './country';
import { Colour } from './enums';

export class Wine {

  constructor(
    public id: number,
    public wine: {
    name: string,
    vintage: number,
    colour: Colour,
    shortDesc: string,
    imageUrl: string,
    country: Country,
    region: Region,
    blend: Blend[]
    })
    { }

}