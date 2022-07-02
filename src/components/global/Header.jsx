import React from "react";
import avatar1 from "../../assets/img/avatar-1.jpg";
import avatar2 from "../../assets/img/avatar-2.jpg";
import avatar3 from "../../assets/img/avatar-3.jpg";

function Header() {
  return (
    <header className="header z-index-50">
      <nav className="navbar py-3 px-0 shadow-sm text-white position-relative">
        {/* <!-- Search Box--> */}

        <div className="search-box shadow-sm">
          <button className="dismiss d-flex align-items-center">
            <svg className="svg-icon svg-icon-light">
              {/* <use xlink:href="#close-1"> </use> */}
            </svg>
          </button>
          <form id="searchForm" action="#" role="search">
            <input
              className="form-control shadow-0"
              type="text"
              placeholder="What are you looking for..."
            />
          </form>
        </div>
        <div className="container-fluid w-100">
          <div className="navbar-holder d-flex align-items-center justify-content-between w-100">
            {/* <!-- Navbar Header--> */}

            <div className="navbar-header">
              {/* <!-- Navbar Brand --> */}
              <a
                className="navbar-brand d-none d-sm-inline-block"
                href="index.html"
              >
                <div className="brand-text d-none d-lg-inline-block">
                  <span>COM </span>
                  <strong>BACT</strong>
                </div>
                <div className="brand-text d-none d-sm-inline-block d-lg-none">
                  <span>COM </span>
                  <strong>BACT</strong>
                </div>
              </a>
              {/* <!-- Toggle Button--> */}
              <a className="menu-btn active" id="toggle-btn" href="/">
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
            {/* <!-- Navbar Menu --> */}

            <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
              {/* <!-- Search--> */}

              <li className="nav-item d-flex align-items-center">
                <a id="search" href="/">
                  <svg className="svg-icon svg-icon-xs svg-icon-light">
                    {/* <use xlink:href="#find-1"> </use> */}
                  </svg>
                </a>
              </li>

              {/* <!-- Notifications--> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white"
                  id="notifications"
                  href="/"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon svg-icon-xs svg-icon-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge bg-red badge-corner fw-normal">
                    12
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end mt-3 shadow-sm"
                  aria-labelledby="notifications"
                >
                  <li>
                    <a className="dropdown-item py-3" href="/">
                      <div className="d-flex">
                        <div className="icon icon-sm bg-blue">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-icon svg-icon-xs svg-icon-light"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                          </svg>
                        </div>
                        <div className="ms-3">
                          <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                            You have 6 new messages
                          </span>
                          <small className="small text-gray-600">
                            4 minutes ago
                          </small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item py-3" href="/">
                      <div className="d-flex">
                        <div className="icon icon-sm bg-green">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-icon svg-icon-xs svg-icon-light"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                          </svg>
                        </div>
                        <div className="ms-3">
                          <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                            New 2 WhatsApp messages
                          </span>
                          <small className="small text-gray-600">
                            4 minutes ago
                          </small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item py-3" href="/">
                      <div className="d-flex">
                        <div className="icon icon-sm bg-orange">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-icon svg-icon-xs svg-icon-light"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                          </svg>
                        </div>
                        <div className="ms-3">
                          <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                            Server Rebooted
                          </span>
                          <small className="small text-gray-600">
                            8 minutes ago
                          </small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item py-3" href="/">
                      <div className="d-flex">
                        <div className="icon icon-sm bg-green">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-icon svg-icon-xs svg-icon-light"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            />
                          </svg>
                        </div>
                        <div className="ms-3">
                          <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                            New 2 WhatsApp messages
                          </span>
                          <small className="small text-gray-600">
                            10 minutes ago
                          </small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item all-notifications text-center"
                      href="/"
                    >
                      <strong className="text-xs text-gray-600">
                        view all notifications
                      </strong>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white"
                  id="notifications"
                  href="/"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  title="About"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon svg-icon-xs svg-icon-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </li>

              {/* <!-- Messages  --> */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link text-white"
                  id="messages"
                  rel="nofollow"
                  href="/"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="badge bg-orange badge-corner fw-normal">
                    10
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end mt-3 shadow-sm"
                  aria-labelledby="messages"
                >
                  <li>
                    <a className="dropdown-item d-flex py-3" href="/">
                      <img
                        className="img-fluid rounded-circle"
                        src={avatar1}
                        alt="..."
                        width="45"
                      />
                      <div className="ms-3">
                        <span className="h6 d-block fw-normal mb-1 text-sm text-gray-600">
                          Jason Doe
                        </span>
                        <small className="small text-gray-600">
                          Sent You Message
                        </small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item d-flex py-3" href="/">
                      <img
                        className="img-fluid rounded-circle"
                        src={avatar2}
                        alt="..."
                        width="45"
                      />
                      <div className="ms-3">
                        <span className="h6 d-block fw-normal mb-1 text-sm text-gray-600">
                          Jason Doe
                        </span>
                        <small className="small text-gray-600">
                          Sent You Message
                        </small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item d-flex py-3" href="/">
                      <img
                        className="img-fluid rounded-circle"
                        src={avatar3}
                        alt="..."
                        width="45"
                      />
                      <div className="ms-3">
                        <span className="h6 d-block fw-normal mb-1 text-sm text-gray-600">
                          Jason Doe
                        </span>
                        <small className="small text-gray-600">
                          Sent You Message
                        </small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-center" href="/">
                      <strong className="text-xs text-gray-600">
                        Read all messages
                      </strong>
                    </a>
                  </li>
                </ul>
              </li> */}

              {/* <!-- Logout    --> */}
              <li className="nav-item">
                <a className="nav-link text-white" href="login.html">
                  <span className="d-none d-sm-inline">Logout </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon svg-icon-xs svg-icon-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
