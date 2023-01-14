import React, { forwardRef, ForwardRefRenderFunction } from "react";
import * as S from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type: "button" | "submit" | "reset";
  width?: string;
}

const buttonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    color = "primary",
    disabled,
    fullWidth,
    loading,
    onClick,
    variant,
    type,
    width,
  },
  ref
) => {
  return (
    <S.Button
      ref={ref}
      {...{ color, disabled, fullWidth, loading, variant, width }}
      onClick={onClick}
      type={type}
    >
      {loading && <S.IconLoading />}
      {children}
    </S.Button>
  );
};

export default forwardRef(buttonBase);
