import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerGlobal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  height: auto;
  max-width: 1140px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 2em;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;


  @media (max-width: 1350px) {
    width: 95%;
    background-color: transparent;
    box-shadow: none;
  }
  @media (max-width: 945px) {
  }
  @media (max-width: 840px) {
    width: 100%;
    padding: 0;
  }

  @media (max-width: 740px) {
    justify-content: start;
  }

  @media (max-width: 480px) {
    /* Estilos para tela com largura máxima de 480px */
  }
`;