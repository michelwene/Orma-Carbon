import { Box } from "@components/Box";
import { Link } from "@components/Link/styles";
import { Text } from "@components/Text/styles";
import {
  ParlamentarianExpenses,
  Parliamentarian,
} from "../../types/Parlamentarian";
import * as S from "./styles";
import { useCallback, useEffect, useState } from "react";
import { apiCongress } from "@services/api";
import { Loader } from "@components/Loader/styles";
import { formatCurrency } from "@utils/formatterCurrency";

interface ModalProps {
  onClose: () => void;
  data: Parliamentarian;
  title: string;
  isOpen: boolean;
}

export function Modal({ onClose, data, title, isOpen }: ModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [expenses, setExpenses] = useState<ParlamentarianExpenses[]>([]);
  // console.log(data);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return;
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const GetExpensesParlamentarian = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await apiCongress.get(`/deputados/${data.id}/despesas`, {
        params: {
          ano: new Date().getFullYear(),
          mes: new Date().getMonth() + 1,
        },
      });
      return response.data.dados.map((item) => ({
        year: item.ano,
        month: item.mes,
        documentNumber: item.numDocumento,
        documentDate: item.dataDocumento,
        supplierName: item.nomeFornecedor,
        documentType: item.tipoDocumento,
        documentValue: item.valorDocumento,
        netValue: item.valorLiquido,
      }));
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (data.parlamentarianType === "Deputado") {
      (async () => {
        const data = await GetExpensesParlamentarian();
        setExpenses(data);
      })();
    }
  }, []);

  console.log(expenses);
  return (
    <>
      <S.Container isOpen={isOpen}>
        <S.Wrapper>
          <S.ModalHeader>
            <S.ModalTitle>{title}</S.ModalTitle>
            <S.CloseButton onClick={onClose}>
              <S.CloseIcon />
            </S.CloseButton>
          </S.ModalHeader>
          <S.ModalContent>
            <Box displayFlex>
              <S.ImagePreview src={data.urlFoto} />
              <Box>
                <Box>
                  <Text variant="caption">Nome:</Text>
                  <Text variant="subtitle">{data.nome}</Text>
                </Box>
                <Box margin="1rem 0 0 0">
                  <Text variant="caption">Email:</Text>
                  <Text variant="subtitle">{data.email}</Text>
                </Box>
                <Box margin="1rem 0 0 0">
                  <Text variant="caption">Partido:</Text>
                  <Text variant="subtitle">{data.siglaPartido}</Text>
                </Box>
                <Box margin="1rem 0 0 0">
                  <Text variant="caption">Estado:</Text>
                  <Text variant="subtitle">{data.siglaUf}</Text>
                </Box>
              </Box>
            </Box>
            {data.parlamentarianType === "Senador" && (
              <Box margin="1rem 0 0 0">
                <Text variant="caption">Site:</Text>
                <Link href={data.uri} target="_blank" rel="noreferrer">
                  {data.uri}
                </Link>
              </Box>
            )}
            {data.parlamentarianType === "Deputado" && (
              <>
                {isLoading ? (
                  <Box margin="1rem 0 0 0">
                    <Loader />
                  </Box>
                ) : (
                  <Box margin="1rem 0 0 0">
                    <Text variant="caption">Despesas:</Text>
                    <Box
                      displayFlex
                      flexDirection="column"
                      rowGap="1rem"
                      margin="1rem 0 0 0"
                    >
                      {expenses && expenses.length > 0 ? (
                        expenses.map((item, index) => (
                          <Box
                            key={item.documentValue + index}
                            displayFlex
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Box>
                              <Box>
                                <Text variant="caption">Data:</Text>
                                <Text variant="subtitle">
                                  {item.documentDate}
                                </Text>
                              </Box>
                              <Box>
                                <Text variant="caption">Doc. Número:</Text>
                                <Text variant="subtitle">
                                  {item.documentNumber}
                                </Text>
                              </Box>
                            </Box>
                            <Box>
                              <Box>
                                <Text variant="caption">Doc. Tipo:</Text>
                                <Text
                                  variant="subtitle"
                                  style={{
                                    marginTop: "0.5rem",
                                  }}
                                >
                                  {item.documentType}
                                </Text>
                              </Box>
                              <Box>
                                <Text variant="caption">Nome fornecedor:</Text>
                                <Text
                                  variant="subtitle"
                                  style={{
                                    marginTop: "0.5rem",
                                  }}
                                >
                                  {item.supplierName}
                                </Text>
                              </Box>
                            </Box>
                            <Box>
                              <Box>
                                <Text variant="caption">Valor Documento:</Text>
                                <Text
                                  variant="subtitle"
                                  style={{
                                    marginTop: "0.5rem",
                                  }}
                                >
                                  {formatCurrency(item.documentValue)}
                                </Text>
                              </Box>
                              <Box>
                                <Text variant="caption">Valor líquido:</Text>
                                <Text
                                  variant="subtitle"
                                  style={{
                                    marginTop: "0.5rem",
                                  }}
                                >
                                  {formatCurrency(item.netValue)}
                                </Text>
                              </Box>
                            </Box>
                          </Box>
                        ))
                      ) : (
                        <Text variant="subtitle">
                          Nenhuma despesa encontrada
                        </Text>
                      )}
                    </Box>
                  </Box>
                )}
              </>
            )}
          </S.ModalContent>
        </S.Wrapper>
      </S.Container>
      <S.Backdrop isOpen={isOpen} onClick={onClose} />
    </>
  );
}
