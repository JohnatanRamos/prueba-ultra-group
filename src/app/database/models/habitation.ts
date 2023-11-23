import { Hotel } from "./hotel";

export interface Habitation {
  id: number;
  enable: boolean;
  name: string;
  baseCost?: number;
  taxes?: number;
  roomType?: string;
  location: string;
  quantity: number;
  hotel: Hotel;
}
