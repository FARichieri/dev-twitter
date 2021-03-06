import css from 'styled-jsx/css';
import { breakpoints, colors, fonts } from '../../styles/theme';
import { addOpacityToColor } from '../../styles/utils';

const backgroundColor = addOpacityToColor(colors.primary, 0.3);

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  textarea,
  input {
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }
  /* Scrollbar */
  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgb(61, 61, 61) rgba(164, 164, 164, 0.402);
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  *::-webkit-scrollbar-track {
    background: rgba(164, 164, 164, 0.402);
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgb(61, 61, 61);
    border-radius: 10px;
    cursor: pointer;
  }
  /* End Scrollbar */
`;
export default css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    height: 100%;
    overflow-y: auto;
    width: 100%;
  }
  @media (min-width: ${breakpoints.mobile}) {
    main {
      width: ${breakpoints.mobile};
    }
  }
`;
