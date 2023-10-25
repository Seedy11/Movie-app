import styled from "styled-components";

export const FooterContainer = styled.div `
background-color: white;
padding: 3rem;
margin-bottom: 2rem;
border-radius: 2rem;
display: flex;
align-content: center;
gap: 5rem;

@media only screen and (max-width: 600px) {
  padding: 1rem;
  gap: 2rem;
}
`
