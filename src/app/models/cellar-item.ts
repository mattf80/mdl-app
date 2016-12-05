import { Wine } from './wine';

export class CellarItem {
  constructor(
    public wine:Wine,
    public quantity: number,
    public unit: string
  ){}
}