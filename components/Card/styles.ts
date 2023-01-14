import styled from "styled-components";

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
`;

export const CardLogo = styled.div`
  background: url(${(props: CardProps) => props.src}) center / contain no-repeat;
  width: 90px;
  height: 90px;
`;

export const CardInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
