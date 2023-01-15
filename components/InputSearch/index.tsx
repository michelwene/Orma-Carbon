import { Box } from "@components/Box";
import React, { forwardRef, ForwardRefRenderFunction } from "react";
import * as S from "./styles";
import { InputProps } from "./types";

const InputSearch: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    placeholder,
    type = "text",
    fullWidth = false,
    value,
    onChange,
  },
  ref
) => {
  return (
    <Box displayFlex flexDirection="column" rowGap="1rem" fullWidth={fullWidth}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        id={name}
        ref={ref}
        placeholder={placeholder}
        type={type}
        fullWidth={fullWidth}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </Box>
  );
};

export default forwardRef(InputSearch);
