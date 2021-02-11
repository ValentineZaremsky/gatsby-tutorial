import React from "react";

import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";
import Title from "./title";
import Social from "./social";
import Footer from "./footer";

export default ({ children }) => (
  <>
    <div className="container">
      <Header />
      <div className="middle">
        <Sidebar />
        <Main>
          {children}
          <Social />
        </Main>
      </div>
      <Footer />
    </div>
  </>
);
