import React from "react";
import { NavLink } from "react-router-dom";
// import avatar1 from "../../assets/img/avatar-1.jpg";
// import avatar2 from "../../assets/img/avatar-2.jpg";
// import avatar3 from "../../assets/img/avatar-3.jpg";

function Header() {
  return (
    <header className="header z-index-50">
      <nav className="navbar py-3 px-0 shadow-sm text-white position-relative">
        <div className="container-fluid w-100">
          <div className="navbar-holder d-flex align-items-center justify-content-between w-100">
            <div className="navbar-header">
              <NavLink className="navbar-brand d-inline-block" to="/dashboard">
                <div className="brand-text d-inline-block">
                  <span>COM </span>
                  <strong>BACT</strong>
                </div>
              </NavLink>
              {/* <!-- Toggle Button--> */}
              <NavLink className="menu-btn active" id="toggle-btn" to="/">
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </div>

            <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link text-white"
                  id="notifications"
                  to="/notifications"
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
                    title="Notifications"
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
                </NavLink>
                <ul
                  className="dropdown-menu dropdown-menu-end mt-3 shadow-sm"
                  aria-labelledby="notifications"
                >
                  <li>
                    <NavLink className="dropdown-item py-3" to="/">
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
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item py-3" to="/">
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
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item py-3" to="/">
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
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item py-3" to="/">
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
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item all-notifications text-center"
                      to="/"
                    >
                      <strong className="text-xs text-gray-600">
                        view all notifications
                      </strong>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link text-white"
                  to="/about"
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
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/login">
                  <span className="d-none d-sm-inline">Logout </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon svg-icon-xs svg-icon-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    title="Logout"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
