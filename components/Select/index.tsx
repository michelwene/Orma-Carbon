import * as S from "./styles";
import { SelectProps } from "./types";

export function Select({ onChange, value, options, label }: SelectProps) {
  return (
    <S.Select onChange={onChange} value={value}>
      <option value="">{label}</option>
      {options.map((item) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        );
      })}
    </S.Select>
  );
}
