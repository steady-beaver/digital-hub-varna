import { useId } from "react";
import {
  IconWrapper,
  SearchContainer,
  StyledIconSearch,
  StyledSearch,
} from "./SearchInput.styles";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  placeholder?: string;
} & React.ComponentProps<typeof SearchContainer>;

const SearchInput = ({
  value,
  onChange,
  icon = <StyledIconSearch />,
  placeholder = "Search...",
  ...props
}: Props) => {
  const id = useId();

  return (
    <SearchContainer {...props}>
      <IconWrapper htmlFor={id}>{icon}</IconWrapper>
      <StyledSearch
        type="search"
        id={id}
        spellCheck="false"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </SearchContainer>
  );
};

export default SearchInput;
