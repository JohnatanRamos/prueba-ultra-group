import { Habitation } from "./habitation";

export interface Hotel {
  id: number;
  name: string;
  city: string;
  enable: boolean;
  habitations: Habitation[];
}
