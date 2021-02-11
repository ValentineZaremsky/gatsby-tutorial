  import React from "react";
  import styled from "styled-components";

  import { colors } from "../utils/vars";

  const Main = styled.main`
    padding: 3rem 1rem;
    max-width: 50em;
    color: ${colors.textBody};

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
    }

    h1 {
      font-variant: small-caps;
      font-size: 2.5rem;
    }

    h2, h3, h4, h5, h6 {
      margin-top: 1.5rem;
      padding-top: 1em;
    }

    h1, h2, h3, h4, h5, h6,
    & strong, & em, & th, tfoot td {
      color: ${colors.textMain};
    }

    blockquote, code, pre {
      background: ${colors.second};
      border-bottom: 0.0625em solid ${colors.light};
      color: ${colors.textMain};
    }

    code {
      padding: 0.125em 0.25em;
      vertical-align: text-bottom;
    }

    blockquote, pre {
      padding: 1em;
      border-left: 0.125em solid ${colors.main};
      font-style: italic;
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
