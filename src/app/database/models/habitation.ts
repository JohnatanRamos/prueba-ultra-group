import { Reservation } from "./reservation";

export interface Habitation {
  enable: boolean;
  name: string;
  baseCost: number;
  taxes: number;
  roomType: string;
  location: string;
  reserved: boolean;
  quantity: number;
  reservations: Reservation[];
}
