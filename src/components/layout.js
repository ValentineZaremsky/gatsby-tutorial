import React from "react";

import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default ({ children }) => (
  <>
    <div className="container">
      <Header />
      <Sidebar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  </>
);