import axios from "axios";

export const apiCongress = axios.create({
  baseURL: "https://dadosabertos.camara.leg.br/api/v2",
});

export const apiSenate = axios.create({
  baseURL: "https://legis.senado.leg.br/dadosabertos/senador",
  headers: {
    options: {
      Accept: "application/json",
    },
  },
});
