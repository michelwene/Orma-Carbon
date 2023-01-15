import React, { forwardRef, ForwardRefRenderFunction } from "react";
import * as S from "./styles";
import { ButtonProps } from "./types";

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
