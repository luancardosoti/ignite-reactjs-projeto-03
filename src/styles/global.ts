import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;

    ::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme['gray-900']};
      border-radius: 9999px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['gray-700']};
      border-radius: 9999px;
      border: 1px solid ${(props) => props.theme['gray-600']};
    }
  }

  .scrollbar {
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme['gray-900']};
      border-radius: 9999px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['gray-700']};
      border-radius: 9999px;
      border: 1px solid ${(props) => props.theme['gray-600']};
    }
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif; 
  }
`
