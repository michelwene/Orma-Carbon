import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";

interface CardProps {
  src: string;
}

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.background.card};
  border-radius: 0.5rem;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 1.5rem 2rem;

  width: 100%;
  min-height: 100px;

  display: flex;
  align-items: center;
  column-gap: 1rem;

  flex-wrap: wrap;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  width: auto;

  @media (max-width: 753px) {
    width: 100%;
  }
`;

export const CardLogo = styled.div`
  background: url(${(props: CardProps) => props.src}) center / contain no-repeat;
  width: 90px;
  height: 90px;
`;

export const IconButtonFavorite = styled.button`
  background-color: ${({ theme }) => theme.background.secondary};
  border: none;
  border-radius: 50%;

  display: none;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  height: 40px;
  width: 40px;

  cursor: pointer;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  @media (max-width: 753px) {
    display: flex;
  }
`;

export const CardInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 1rem;
`;

export const WrapperInfo = styled.div`
  display: flex;
  column-gap: 1rem;

  justify-content: space-between;

  @media (max-width: 510px) {
    flex-direction: column;
  }
`;

export const WrapperFavorite = styled.div`
  text-align: right;

  @media (max-width: 571px) {
    text-align: left;
    margin-top: 1rem;
  }
`;

export const ContainerButtonFavorite = styled.div`
  margin-top: 1rem;

  @media (max-width: 753px) {
    display: none;
  }
`;

export const MoreInfo = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text.primary};

  transition: filter 0.2s;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    filter: brightness(0.8);
  }
`;

export const Icon = styled(AiOutlineStar)`
  color: ${({ theme }) => theme.background.primary};

  font-size: 1.5rem;
`;
