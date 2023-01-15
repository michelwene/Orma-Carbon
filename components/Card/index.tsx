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
    setParlamentarian(null);
    document.body.style.overflow = "unset";
  }

  const isFavorited = favorites.some((item) => item.id === data.id);

  return (
    <>
      <S.CardContainer>
        <S.CardHeader>
          <S.CardLogo src={data.urlFoto} />
          <S.IconButtonFavorite type="button" onClick={() => onClickFavorite()}>
            <S.Icon />
          </S.IconButtonFavorite>
        </S.CardHeader>
        <S.CardInfo>
          <S.WrapperInfo>
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
                <Text
                  variant="subtitle"
                  style={{
                    wordBreak: "break-word",
                  }}
                >
                  {data.email || " - "}
                </Text>
              </Box>
              <Box margin="1rem 0 0 0">
                <Text variant="caption">Sigla UF:</Text>
                <Text variant="subtitle">{data.siglaUf}</Text>
              </Box>
            </Box>
          </S.WrapperInfo>
          <S.WrapperFavorite>
            <Box>
              <Text variant="caption">Detalhes:</Text>
              <S.MoreInfo onClick={handleOpenModal}>Ver mais...</S.MoreInfo>
            </Box>
            <S.ContainerButtonFavorite>
              <Button
                type="button"
                variant="outlined"
                onClick={() => onClickFavorite()}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: "1rem",
                }}
              >
                {isFavorited ? "Desfavoritar" : "Favoritar"}
                {!isFavorited && <S.Icon />}
              </Button>
            </S.ContainerButtonFavorite>
          </S.WrapperFavorite>
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
