import styled from "styled-components";
import Image from "next/image";

export const Logo = styled.div`
  height: 70px;
  width: 70px;

  @media (max-width: 420px) {
    display: none;
  }
`;

export const LogoImage = styled(Image)`
  height: 100%;
  width: 100%;
`;
