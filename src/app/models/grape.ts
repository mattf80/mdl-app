import { ReferenceItem  } from './../interfaces/reference-item';

export class Grape implements ReferenceItem {
  id: number;
  name: string;
}

export class Blend {
  grape: Grape;
  percentage: number;
}