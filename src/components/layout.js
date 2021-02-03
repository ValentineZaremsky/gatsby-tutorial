import React from "react";

import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default ({ children }) => (
  <>
    <div className="container">
      <Header />
      <div className="middle">
        <Sidebar />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  </>
);