import React from "react";
import Header from "../global/Header";
import Sidebar from "../global/Sidebar";

function Layout({ pageTitle, children }) {
  return (
    <div className="page">
      <Header />

      <div className="page-content d-flex align-items-stretch">
        <Sidebar />

        <div className="content-inner w-100">
          <header className="bg-white shadow-sm px-4 py-3 z-index-20">
            <div className="container-fluid px-0">
              <h2 className="mb-0 p-1">{pageTitle}</h2>
            </div>
          </header>

          {children}

          <footer
            className="position-absolute bottom-0 bg-darkBlue text-white text-center py-3 w-100 text-xs"
            id="footer"
          >
            <div className="container-fluid">
              <div className="row gy-2">
                <div className="col-sm-6 text-sm-start">
                  <p className="mb-0">COMBACT &copy; 2022</p>
                </div>
                <div className="col-sm-6 text-sm-end">
                  <p className="mb-0">
                    Design by
                    <a
                      href="https://bootstrapious.com/p/admin-template"
                      className="text-white text-decoration-none"
                    >
                      Bootstrapious
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Layout;
