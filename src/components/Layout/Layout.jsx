import React from "react";
import Header from "../global/Header";
import Sidebar from "../global/Sidebar";
import { Link } from "react-router-dom";

// @subTitle
// previous: { title: "Lessons", reference: "/lessons" },
// current: "Lesson title",

function Layout({ pageTitle, subTitle = null, children }) {
  return (
    <div className="page">
      <Header />

      <div className="page-content d-flex align-items-stretch">
        <Sidebar />

        <div className="content-inner w-100">
          {pageTitle && (
            <header className="bg-white shadow-sm px-4 py-3 z-index-20">
              <div className="container-fluid px-0">
                <h2 className="mb-0 p-1">{pageTitle}</h2>
              </div>
            </header>
          )}

          {subTitle && (
            <div className="bg-white">
              <div className="container-fluid">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0 py-3">
                    <li className="breadcrumb-item">
                      <Link
                        className="fw-light"
                        to={subTitle?.previous?.reference}
                      >
                        {subTitle?.previous?.title}
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active fw-light"
                      aria-current="page"
                    >
                      {subTitle?.current}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          )}

          <main className="container-fluid py-5">{children}</main>

          <footer
            className="bg-darkBlue text-white text-center py-3 w-100 text-xs"
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
