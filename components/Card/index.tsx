import { Box } from "@components/Box";
import Button from "@components/Button";
import { Modal } from "@components/Modal";
import { Text } from "@components/Text/styles";
import { useState } from "react";
import { useFavorite } from "../../context/FavoritesContext";
import { Parliamentarian } from "../../types/Parlamentarian";
import * as S from "./styles";

interface CardProps {
  data: Parliamentarian;
}

export function Card({ data }: CardProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [parlamentarian, setParlamentarian] = useState<Parliamentarian | null>(
    null
  );
  const { handleFavoriteParlamentarian, favorites } = useFavorite();

  function onClickFavorite() {
    handleFavoriteParlamentarian(data);
  }

  function handleOpenModal() {
    setParlamentarian(data);
    setIsOpenModal(true);
  }

  function onRequestCloseModal() {
    setIsOpenModal(false);
  }

  const isFavorited = favorites.some((item) => item.id === data.id);

  return (
    <>
      <S.CardContainer>
        <S.CardLogo src={data.urlFoto} />
        <S.CardInfo>
          <Box displayFlex columnGap="1rem">
            <Box width="200px">
              <Box>
                <Text variant="caption">Nome:</Text>
                <Text variant="subtitle">{data.nome}</Text>
              </Box>
              <Box margin="1rem 0 0 0">
                <Text variant="caption">Sigla Partido:</Text>
                <Text variant="subtitle">{data.siglaPartido}</Text>
              </Box>
            </Box>
            <Box width="200px">
              <Box>
                <Text variant="caption">Email:</Text>
                <Text variant="subtitle">{data.email || " - "}</Text>
              </Box>
              <Box margin="1rem 0 0 0">
                <Text variant="caption">Sigla UF:</Text>
                <Text variant="subtitle">{data.siglaUf}</Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              style={{
                textAlign: "right",
              }}
            >
              <Text variant="caption">Detalhes:</Text>
              <S.MoreInfo onClick={handleOpenModal}>Ver mais...</S.MoreInfo>
            </Box>
            <Box margin="1rem 0 0 0">
              <Button
                type="button"
                variant="outlined"
                onClick={() => onClickFavorite()}
              >
                {isFavorited ? "Desfavoritar" : "Favoritar"}
                {!isFavorited && <S.Icon />}
              </Button>
            </Box>
          </Box>
        </S.CardInfo>
      </S.CardContainer>
      {parlamentarian && (
        <Modal
          onClose={() => onRequestCloseModal()}
          data={parlamentarian}
          title="Detalhes do Parlamentar"
          isOpen={isOpenModal}
        />
      )}
    </>
  );
}
