import { Guest } from "./guests";
import { Habitation } from "./habitation";

export interface Reservation {
  id: number;
  room: string;
  numberOfGuests: number;
  checkInDate: Date;
  checkOutDate: Date;
  guests?: Guest[];
  habitation: Habitation;
}
