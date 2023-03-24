import styled from 'styled-components'

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;

  background-color: ${(props) => props.theme['gray-900']};
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: normal;
  color: ${(props) => props.theme['gray-100']};
  text-align: center;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-300']};

    &:hover {
      text-decoration: underline;
    }
  }
`
