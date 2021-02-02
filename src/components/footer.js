  import React from "react";
  import { Link } from "gatsby";
  import styled from "styled-components";

  import { site } from "../utils/site";

  const Footer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #220044;
    color: #ddccdd;
    padding: 1em;

    a {
      color: #fff;
    }

    .contacts {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: start;
      padding: 0.5em;
    }

    .contacts div {
      margin: 0.5em 2em;
    }

    .contacts p {
      margin: 0em;
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
          <p><a href="https://goo.gl/maps/fgtLEQoDsQjTDTfb7" rel="noreferrer" target="_blank">15 Vasilieva</a>,</p>
          <p>Kamyanets-Podilsky, 32300, Ukraine</p>
        </div>
      </div>
      <div className="copyright">
        &copy;&nbsp;<time dateTime="2021-01">2021</time>&nbsp;
        <Link to="/">{site.siteName}</Link>
      </div>
    </Footer>
  );