import * as S from "./styles";

interface ButtonDarkThemeProps {
  onClick: () => void;
  theme: string;
}

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
