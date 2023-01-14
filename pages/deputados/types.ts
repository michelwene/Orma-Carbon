export type IDeputados = {
  email: string | null;
  id: number;
  idLegislatura: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  uri: string;
  uriPartido: string;
  urlFoto: string;
};

export interface AppHomeProps {
  data: {
    dados: IDeputados[];
  };
}
