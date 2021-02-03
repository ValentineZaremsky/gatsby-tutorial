import React from "react";

import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";
import Footer from "./footer";

export default ({ children }) => (
  <>
    <div className="container">
      <Header />
      <div className="middle">
        <Sidebar />
        <Main>
          {children}
        </Main>
      </div>
      <Footer />
    </div>
  </>
);