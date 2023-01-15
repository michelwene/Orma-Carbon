import { Parliamentarian } from "../../types/Parlamentarian";

export interface AppHomeProps {
  data: {
    dados: Parliamentarian[];
    links: {
      rel: string;
      href: string;
    }[];
  };
}
