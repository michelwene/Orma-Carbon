export type Parliamentarian = {
  email: string | null;
  id: number | string;
  idLegislatura: number | string;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  uri?: string;
  uriPartido?: string;
  urlFoto: string;
  parlamentarianType: string;
};

export type ParlamentarianExpenses = {
  year: number;
  month: number;
  documentNumber: string;
  documentDate: string;
  supplierName: string;
  documentType: string;
  documentValue: number;
  netValue: number;
};
