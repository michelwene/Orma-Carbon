import { Parliamentarian } from "../../types/Parlamentarian";

export type Link = {
  rel: string;
  href: string;
};
export interface AppHomeProps {
  data: {
    dados: Parliamentarian[];
    links: Link[];
  };
}
