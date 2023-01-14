export type Senator = {
  IdentificacaoParlamentar: {
    CodigoParlamentar: string;
    EmailParlamentar: string;
    CodigoPublicoNaLegAtual: string;
    NomeCompletoParlamentar: string;
    SiglaPartidoParlamentar: string;
    UfParlamentar: string;
    UrlFotoParlamentar: string;
    UrlPaginaParlamentar: string;
  };
};

export interface SenatorProps {
  data: {
    ListaParlamentarEmExercicio: {
      Parlamentares: {
        Parlamentar: Senator[];
      };
    };
  };
}
