import * as S from "./styles";
import { ButtonDarkThemeProps } from "./types";

export function ButtonDarkTheme({ theme, onClick }: ButtonDarkThemeProps) {
  return (
    <S.ButtonDarkTheme>
      {theme === "light" ? (
        <S.ButtonDarkTheme onClick={onClick}>
          <S.IconSun />
        </S.ButtonDarkTheme>
      ) : (
        <S.ButtonDarkTheme onClick={onClick}>
          <S.IconMoon />
        </S.ButtonDarkTheme>
      )}
    </S.ButtonDarkTheme>
  );
}
