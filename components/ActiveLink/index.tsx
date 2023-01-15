import { useRouter } from "next/router";
import React from "react";
import * as S from "./styles";
import { ActiveLinkProps } from "./types";

export function ActiveLink({ children, href }: ActiveLinkProps) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "#0072E5" : "black",
    textDecoration: router.asPath === href ? "underline" : "none",
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <S.Link href={href} onClick={handleClick} style={style}>
      {children}
    </S.Link>
  );
}
