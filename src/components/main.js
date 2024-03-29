  import React from "react";
  import styled from "styled-components";

  import { colors } from "../utils/vars";

  const Main = styled.main`
    padding: 3rem 1rem;
    // max-width: 50em;
    color: ${colors.textBody};

    border: 1px solid #666666; // !!

    & a {
      color: ${colors.link};
    }

    & p:last-child {
      // margin-bottom: 0;
    }

    & ul li {
      margin-bottom: 0;
    }

    & .the-end {
      text-align: center;
      font-size: 2.5rem;
      overflow: hidden;
    }
    .the-end::before, .the-end::after {
      content: '';
      background: ${colors.textBody};
      display: inline-block;
      height: 0.05rem;
      position: relative;
      vertical-align: middle;
      width: 50%;
    }
    .the-end::before {
      right: 0.5rem;
      margin-left: -50%;
    }
    .the-end::after {
      left: 0.5rem;
      margin-right: -50%;
    }

    h2, h3, h4, h5, h6 {
      margin-top: 1.5rem;
      padding-top: 1em;
    }

    h2, h3, h4, h5, h6,
    & em, & th, tfoot td {
      color: ${colors.textMain};
    }

    img {
      margin-bottom: 0;
    }

    img + em {
      color: ${colors.textBody};
      display: block;
      text-align: center;
      font-size: 0.9em;
    }

    figure img {
      display: block;
      margin: 0 auto;
    }

    .gallery {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
    }

    figure.gallery-item {
      display: inline-block;
      max-width: 50%;
    }

    .gallery-pict {
      display: inline-block;
      position: relative;
      overflow: hidden;
      padding: .66rem;
      margin: 0;
    }

    .gallery-pict::after,
    .gallery-pict::before {
      content: '';
      position: absolute;
      z-index: 2;
      width: 70px;
      height: 70px;
      left: -40px;
      bottom: -40px;
      transform: rotate(45deg);
      box-shadow: 0 0 10px rgba(0,0,0,.5);
      outline: #c2b59d dashed 1px;
      outline-offset: -3px;
      background: ${colors.backPage};
    }
    .gallery-pict::after {
      left: auto;
      right: -40px;
      top: -40px;
    }

    .gallery-pict img {
      display: block;
      padding: 4px;
      background: #dad6cf;
      border: 2px solid #c2b59d;
    }

    figcaption {
      // position: absolute;
      // z-index: 3;
      color: ${colors.textBody};
      text-align: center;
      font-style: italic;
      font-size: 0.9em;
      right: 0;
      left: 0;
    }

    blockquote, code, pre {
      background: ${colors.second};
      border-bottom: 0.0625em solid ${colors.light};
      color: ${colors.textMain};
    }

    code {
      padding: 0.125em 0.25em;
      vertical-align: top;
    }

    blockquote, pre {
      padding: 1em;
      border-left: 0.125rem solid ${colors.main};
    }

    blockquote {
      font-style: italic;
    }

    pre {
      line-height: 1.2em;
    }

    table {
      background: #fff8ff;
    }

    tbody tr:nth-child(even) {
      background-color: #fff6ff;
    }

    thead, tfoot {
      background: ${colors.second};
    }
  `;

  export default ({ children }) => (
    <>
      <Main>
        {children}
      </Main>
    </>
  );
