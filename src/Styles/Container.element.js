import styled from "styled-components";

export const Container = styled.div `
margin-bottom: 4rem;
display: flex;
gap: 5rem;
overflow-x: scroll;
overflow-y: hidden;
scroll-snap-type: x mandatory;
scroll-padding-left: 20px;
@media only screen and (max-width: 800px) {
  gap: 2rem;
  margin-bottom: 1rem;
}
`