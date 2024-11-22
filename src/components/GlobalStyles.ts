import { createGlobalStyle } from 'styled-components';
import { Colors } from '../theme';

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  * {
    scroll-behavior: smooth;
  }
  html {
    text-size-adjust: 100%;
  }

  body {
    margin: 0;
    overscroll-behavior: none;
    min-height: 100%;
    font-weight: normal;
    font-size: 15px;
    line-height: 1.72857;
    color: ${Colors.MineShaft};
    transition: opacity .2s;
    &.ReactModal__Body--open {
      overflow: hidden;
      div[type='tooltip'][class*='Tooltip__Wrapper-'] {
        z-index: 2000;
      }
    }
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  [hidden],
  template {
    display: none;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: 600;
  }
  dfn {
    font-style: italic;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  mark {
    background: #ff0;
    color: ${Colors.MineShaft};
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }
  img {
    border: 0;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  figure {
    margin: 1em 40px;
  }
  hr {
    box-sizing: content-box;
    height: 0;
  }
  pre {
    overflow: auto;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }
  button {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    appearance: button;
    cursor: pointer;
  }
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  input {
    line-height: normal;
  }
  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  input[type='search'] {
    appearance: textfield;
    box-sizing: content-box;
  }
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    appearance: none;
  }
  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  legend {
    border: 0;
    padding: 0;
  }
  textarea {
    overflow: auto;
  }
  optgroup {
    font-weight: 600;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
  }
  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  p {
    margin: 0 0 10px;
  }
  ul,
  ol {
    margin-top: 0;
    margin-bottom: 10px;
    ul,
    ol {
      margin-bottom: 0;
    }
  }
  input,
  button,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  a {
    background-color: transparent;
    outline: 0;
    &, :hover,:focus,:visited {
      text-decoration: none;
    }
  }
`;