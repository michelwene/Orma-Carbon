import Image from "next/image";
import * as S from "./styles";
import brazilFlag from "@assets/img/bandeirado-brasil.svg";

export function Logo() {
  return (
    <S.Logo>
      <S.LogoImage src={brazilFlag} alt="Bandeira do Brasil" />
    </S.Logo>
  );
}
