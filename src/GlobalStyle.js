import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --color-principal: rgba(42, 122, 228, 1);
    --gris: #F5F5F5;
    --blanco: #fff;
    --negro: #000;
    --celeste: #6BD1FF;
    --gris: #53585D;
    --soft-grey: #cccc;
    --soft-white: #f2f2f2;
    --soft-green: #6EBFB5;
    --black-green: #52948C;
    --soft-red: #FFC7C7;
    --azul: #0B006C;
    --rosado: #ff4081;
    --amarillo: #ffd500;
    --verde-claro: #00e676;
    --morado: #6200ea;
    --blanco: #fff;
    --negro: #000;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  .hyb{
    display: flex;
    background-color: #000;
    justify-content: space-between;
  }
`

export default GlobalStyle