import { Guest } from "./guests";

export interface Reservation {
  room: string;
  numberOfGuests: number;
  checkInDate: Date;
  checkOutDate: Date;
  guests: Guest[];
}
