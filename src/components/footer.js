  import React from "react";
  import { Link } from "gatsby";
  import styled from "styled-components";

  import { colors } from "../utils/vars";
  import { site } from "../utils/site";

  const Footer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.textMain};
    color: ${colors.light};
    padding: 1em;

    a {
      color: ${colors.textSecond};
    }

    .contacts {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: start;
      padding: 0.5em;

      & div {
        margin: 0.5em 2em;
      }

      & p {
        margin: 0em;
      }
    }

    .copyright {
      padding: 0.5em;
    }
  `;

  export default () => (
    <Footer>
      <div className="contacts">
        <div className="email&phone">
          <p><a href={"mailto:"+site.siteEmail}>{site.siteEmail}</a></p>
          <p><a href={"tel:"+site.siteTel}>{site.siteTel}</a></p>
        </div>
        <div className="address">
          <p><a href={site.siteGeo} rel="noreferrer" target="_blank">{site.siteAddr1}</a></p>
          <p>{site.siteAddr2}</p>
          <p>{site.siteAddr3}</p>
        </div>
      </div>
      <div className="copyright">
        &copy;&nbsp;<time dateTime="2021-01">2021</time>&nbsp;
        <Link to="/">{site.siteName}</Link>
      </div>
    </Footer>
  );