import React, { forwardRef, ForwardRefRenderFunction } from "react";
import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
    color,
    disabled,
    fullWidth,
    loading,
    onClick,
    variant,
    type,
    width,
    ...rest
  },
  ref
) => {
  return (
    <S.Button
      ref={ref}
      {...{ color, disabled, fullWidth, loading, variant, width }}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {loading && <S.IconLoading />}
      {children}
    </S.Button>
  );
};

export default forwardRef(buttonBase);
