import styled from "styled-components";

export const Icon = styled.div`
  font-size: 0.9rem;
  background-color: #ff385c;
  color: white;
  padding: 0.5rem;
  border-radius: 100%;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.4rem;
  border-radius: 30px;
  border: 1px solid #c4c4c4;

  p {
    padding: 0 1rem;
    font-size: 0.8rem;

    &:nth-child(2) {
      border-left: 1px solid #c4c4c4;
      border-right: 1px solid #c4c4c4;
    }

    &:nth-child(3) {
      font-weight: 400;
      color: #717171;
    }
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
