import { SearchBarContainer, SearchBar, Icon } from "./SearchNav.styles";

const SearchNav = () => {
  return (
    <SearchBarContainer>
      <SearchBar>
        <p>Anywhere</p>
        <p>Any week</p>
        <p>Add guests</p>
        <Icon className="fa-solid fa-magnifying-glass"></Icon>
      </SearchBar>
    </SearchBarContainer>
  );
};

export default SearchNav;
