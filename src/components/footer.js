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
    padding: 2em;

    a {
      color: ${colors.textSecond};
    }

    .contacts {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: start;
      align-content: center;
      max-height: 5.5em;

      @media screen and (max-width: 640px) {
        max-height: 100%;
      }

      & div {
        position: relative;
        margin: 0.5em 1.5em 0.5em 1.5em;
        flex: 0 1 content;
      }

      & div svg {
        position: absolute;
        width: 1.2em;
        height: 1.2em;
        left: -1.4em;
        top: 0.2em;
      }

      & p {
        margin: 0em;
      }
    }

    .copysign {
      font-size: 1.5em;
      vertical-align: -0.1em;
    }
  `;

  export default () => (
    <Footer>
      <div className="contacts">
        <div className="email">
          <svg><use xlinkHref="#icon-email" /></svg>
          <p><a href={"mailto:"+site.siteEmail1}>{site.siteEmail1}</a></p>
          <p><a href={"mailto:"+site.siteEmail2}>{site.siteEmail2}</a></p>
          <p><a href={"mailto:"+site.siteEmail3}>{site.siteEmail3}</a></p>
        </div>
        <div className="phone">
          <svg><use xlinkHref="#icon-phone" /></svg>
          <p><a href={"tel:"+site.siteTel1}>{site.siteTel1}</a></p>
          <p><a href={"tel:"+site.siteTel2}>{site.siteTel2}</a></p>
          <p><a href={"tel:"+site.siteTel3}>{site.siteTel3}</a></p>
        </div>
        <div className="facebook">
          <svg><use xlinkHref="#icon-facebook" /></svg>
          <p><a href={"https://www."+site.siteFacebook}>{site.siteFacebook}</a></p>
        </div>
        <div className="telegram">
          <svg><use xlinkHref="#icon-telegram" /></svg>
          <p><a href={"https://www."+site.siteTelegram}>{site.siteTelegram}</a></p>
        </div>
        <div className="address">
          <svg><use xlinkHref="#icon-place" /></svg>
          <p><a href={site.siteGeo} rel="noreferrer" target="_blank">{site.siteAddr1}</a></p>
          <p>{site.siteAddr2}</p>
          <p>{site.siteAddr3}</p>
        </div>
      </div>
      <div className="copyright">
        <span className="copysign">&copy;</span>&nbsp;<time dateTime="2021-01">2021</time>&nbsp;
        <Link to="/">{site.siteName}</Link>
      </div>
    </Footer>
  );
