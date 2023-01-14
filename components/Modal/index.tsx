import * as S from "./styles";

interface ModalProps {
  onClose: () => void;
}

export function Modal({ onClose }: ModalProps) {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.ModalHeader>
            <S.ModalTitle>Modal Title</S.ModalTitle>
            <S.CloseButton onClick={onClose}>
              <S.CloseIcon />
            </S.CloseButton>
          </S.ModalHeader>
        </S.Wrapper>
      </S.Container>
      <S.Backdrop />
    </>
  );
}
