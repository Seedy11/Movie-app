/** @format */

import styled from "styled-components";

export const SearchHeader = styled.div`
  background-color: #141414;
  padding: 4rem 2rem 2rem;
  text-align: center;
  color: white;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #aaa;
    margin-bottom: 2rem;
  }
`;

/* Search Input */
export const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 0.9rem 1.2rem;
  border-radius: 0.3rem;
  border: none;
  outline: none;
  font-size: 1rem;
`;

/* Results Grid */
export const SearchContainer = styled.div`
  background-color: #141414;
  min-height: 100vh;
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
`;

/* Netflix Card */

/* Empty State */
export const EmptyState = styled.div`
  grid-column: 1 / -1;
  color: #aaa;
  text-align: center;
  padding: 4rem 0;
`;
