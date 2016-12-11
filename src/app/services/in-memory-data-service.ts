import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Colour } from './../models/enums';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let wines = [
      {
        id: 1, wine: {
          name: "Latour", vintage: 1995, colour: Colour.Red, shortDesc: "Some French plonk or summat", country: { id: 1, name: "France" }, imageUrl: "",
          blend: [
            { grape: { id: 1, name: "Cabernet" }, percentage: 80 },
            { grape: { id: 2, name: "Merlot" }, percentage: 20 }
          ]
        }
      },
      {
        id: 2, wine: {
          name: "Ramey Russian River Valley Chardonnay", vintage: 2005, colour: Colour.White, shortDesc: "Entry level wine from one of the top Californian producers", country: { id: 5, name: "USA" }, imageUrl: "",
          blend: [
            { grape: { id: 3, name: "Chardonnay" }, percentage: 100 }
          ]
        }
      }
    ];

    /*
    ,
      {
        id: 2, name: "Margaux", vintage: 1982, colour: "Red", shortDesc: "1st growth from the south", country: { id: 1, name: "France" }, imageUrl:"",
        blend: [
          { grape: { id: 1, name: "Cabernet" }, percentage: 65 },
          { grape: { id: 2, name: "Merlot" }, percentage: 35 }
        ]
      },
      {
        id: 3, name: "Ramey Chardonnay", vintage: 2005, colour: "White", shortDesc: "Grown in the Russian River Valley", country: { id: 5, name: "USA" }, imageUrl:"",
        blend: [
          { grape: { id: 3, name: "Chardonnay" }, percentage: 100 }
        ]
      },
      {
        id: 4, name: "Rioja", vintage: 2014, colour: "Red", shortDesc: "Spain's most famous red wine", country: { id: 2, name: "Spain" }, imageUrl:"",
        blend: [
          { grape: { id: 4, name: "Temperanillo" }, percentage: 100 }
        ]
      },
      {
        id: 5, name: "Jacob's Creek Shiraz", colour: "Red", vintage: 2016, shortDesc: "Mass-produced Australian bollocks", country: { id: 4, name: "Germany" }, imageUrl:"",
        blend: [
          { grape: { id: 5, name: "Shiraz" }, percentage: 80 },
          { grape: { id: 2, name: "Merlot" }, percentage: 20 }
        ]
      }
      */

    let countries = [
      { id: 1, item: { name: "France" } },
      { id: 2, item: { name: "Spain" } },
      { id: 3, item: { name: "Italy" } },
      { id: 4, item: { name: "Germany" } },
      { id: 5, item: { name: "USA" } }
    ];

    let grapes = [
      { id: 1, item: { name: "Cabernet" } },
      { id: 2, item: { name: "Merlot" } },
      { id: 3, item: { name: "Chardonnay" } },
      { id: 4, item: { name: "Temperanillo" } },
      { id: 5, item: { name: "Shiraz" } }
    ]

    let cellarItems = []

    return { wines, countries, grapes, cellarItems };
  }
}