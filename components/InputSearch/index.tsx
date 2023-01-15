import { Box } from "@components/Box";
import React, { forwardRef, ForwardRefRenderFunction } from "react";
import * as S from "./styles";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  fullWidth?: boolean;
}

const InputSearch: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, placeholder, type = "text", fullWidth = false },
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
      />
    </Box>
  );
};

export default forwardRef(InputSearch);
