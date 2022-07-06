import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

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

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
