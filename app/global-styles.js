import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato|Lobster+Two');

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #333;
  }

  body.fontLoaded {
    font-family: 'Lato', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  .left-appear {
    will-change: transform;
    @media screen and (max-width: 800px) {
      transform: translateX(-100%);
    }
  }

  .left-appear.left-appear-active {
    will-change: transform;
    @media screen and (max-width: 800px) {
      transform: translateX(0%);
      transition: transform 500ms;
    }
  }

  .right-appear {
    will-change: transform;
    @media screen and (max-width: 800px) {
      transform: translateX(100%);
    }
  }

  .right-appear.right-appear-active {
    will-change: transform;
    @media screen and (max-width: 800px) {
      transform: translateX(0%);
      transition: transform 500ms;
    }
  }
`;
