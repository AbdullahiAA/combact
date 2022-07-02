import React from "react";
import Layout from "../components/Layout/Layout";
// import avatar1 from "../assets/img/avatar-1.jpg";
// import avatar2 from "../assets/img/avatar-2.jpg";
// import avatar3 from "../assets/img/avatar-3.jpg";
// import avatar4 from "../assets/img/avatar-4.jpg";
// import avatar5 from "../assets/img/avatar-5.jpg";

function Dashboard() {
  return (
    <Layout pageTitle={"Dashboard"}>
      <section className="pb-0">
        <div className="container-fluid">
          <div className="card mb-0">
            <div className="card-body">
              <div className="row gx-5 bg-white">
                <div className="col-xl-3 col-sm-6 py-4 border-lg-end border-gray-200">
                  <div className="d-flex align-items-center">
                    <div className="icon flex-shrink-0 bg-violet">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-icon svg-icon-sm svg-icon-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </div>
                    <div className="mx-3">
                      <h6 className="h4 fw-light text-gray-600 mb-3">
                        Lessons
                        <br />
                        Completed
                      </h6>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-violet"
                          role="progressbar"
                          style={{ width: "25%", height: "4px" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="number">
                      <strong className="text-lg">25</strong>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6 py-4 border-lg-end border-gray-200">
                  <div className="d-flex align-items-center">
                    <div className="icon flex-shrink-0 bg-red">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="svg-icon svg-icon-sm svg-icon-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <div className="mx-3">
                      <h6 className="h4 fw-light text-gray-600 mb-3">
                        Total
                        <br />
                        Lessons
                      </h6>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-red"
                          role="progressbar"
                          style={{ width: "70%", height: "4px" }}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="number">
                      <strong className="text-lg">70</strong>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6 py-4 border-lg-end border-gray-200">
                  <div className="d-flex align-items-center">
                    <div className="icon flex-shrink-0 bg-green">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-icon svg-icon-sm svg-icon-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div className="mx-3">
                      <h6 className="h4 fw-light text-gray-600 mb-3">
                        Attempted
                        <br />
                        Quizzes
                      </h6>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-green"
                          role="progressbar"
                          style={{ width: "40%", height: "4px" }}
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="number">
                      <strong className="text-lg">40</strong>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6 py-4">
                  <div className="d-flex align-items-center">
                    <div className="icon flex-shrink-0 bg-orange">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-icon svg-icon-sm svg-icon-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div className="mx-3">
                      <h6 className="h4 fw-light text-gray-600 mb-3">
                        Total
                        <br />
                        Quizzes
                      </h6>
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-orange"
                          role="progressbar"
                          style={{ width: "50%", height: "4px" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="number">
                      <strong className="text-lg">50</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pb-0">
            <div className="container-fluid">
              <div className="row align-items-stretch">
                <div className="col-lg-3 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="icon flex-shrink-0 bg-red">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fas fa-tasks"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            />
                          </svg>
                        </div>
                        <div className="ms-3">
                          <strong className="text-lg d-block lh-1 mb-1">
                            234
                          </strong>
                          <small className="text-uppercase text-gray-500 small d-block lh-1">
                            Applications
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="icon flex-shrink-0 bg-green">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="far fa-calendar"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="ms-3">
                          <strong className="text-lg d-block lh-1 mb-1">
                            152
                          </strong>
                          <small className="text-uppercase text-gray-500 small d-block lh-1">
                            Interviews
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="icon flex-shrink-0 bg-orange">
                          <i className="far fa-paper-plane"></i>
                        </div>
                        <div className="ms-3">
                          <strong className="text-lg d-block lh-1 mb-1">
                            147
                          </strong>
                          <small className="text-uppercase text-gray-500 small d-block lh-1">
                            Forwards
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12">
                  <div className="card mb-0 h-100">
                    <div className="card-body">
                      <canvas id="lineCahrt"></canvas>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-12">
                  <div className="card">
                    <div className="card-body">
                      <strong className="h2 mb-0 d-block text-violet">
                        95%
                      </strong>
                      <small className="text-gray-500 small text-uppercase d-block mb-3">
                        Current Server Uptime
                      </small>
                      <canvas id="barChartHome"></canvas>
                    </div>
                  </div>
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="icon flex-shrink-0 bg-green">
                          <i className="fas fa-chart-area"></i>
                        </div>
                        <div className="ms-3">
                          <strong className="text-lg mb-0 d-block lh-1">
                            99.9%
                          </strong>
                          <small className="text-gray-500 small text-uppercase">
                            Success Rate
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

      {/* <section className="pb-0">
            <div className="container-fluid">

              <div className="card mb-3">
                <div className="card-body p-3">
                  <div className="row align-items-center gx-lg-5 gy-3">
                    <div className="col-lg-6 border-lg-end">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid shadow-sm"
                            src="img/project-1.jpg"
                            alt="..."
                            width="50"
                          />
                          <div className="ms-3">
                            <h3 className="h4 text-gray-700 mb-0">
                              Project Title
                            </h3>
                            <small className="text-gray-500">
                              Lorem Ipsum Dolor
                            </small>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 d-none d-sm-block">
                          Today at 4:24 AM
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <p className="d-flex mb-0 text-gray-600 text-sm d-flex align-items-center flex-shrink-0">
                          <i className="far fa-clock me-1"></i>12:00 PM
                        </p>
                        <p className="d-flex mb-0 mx-3 text-gray-600 text-sm d-flex align-items-center flex-shrink-0">
                          <i className="far fa-comment me-1"></i>20
                        </p>
                        <div
                          className="progress w-100"
                          style={{ maxWidth: "15rem", height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-red"
                            role="progressbar"
                            style={{ width: "45%", height: "6px" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body p-3">
                  <div className="row align-items-center gx-lg-5 gy-3">
                    <div className="col-lg-6 border-lg-end">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid shadow-sm"
                            src="img/project-2.jpg"
                            alt="..."
                            width="50"
                          />
                          <div className="ms-3">
                            <h3 className="h4 text-gray-700 mb-0">
                              Project Title
                            </h3>
                            <small className="text-gray-500">
                              Lorem Ipsum Dolor
                            </small>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 d-none d-sm-block">
                          Today at 4:24 AM
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <p className="d-flex mb-0 text-gray-600 text-sm d-flex align-items-center flex-shrink-0">
                          <i className="far fa-clock me-1"></i>12:00 PM
                        </p>
                        <p className="d-flex mb-0 mx-3 text-gray-600 text-sm d-flex align-items-center flex-shrink-0">
                          <i className="far fa-comment me-1"></i>20
                        </p>
                        <div
                          className="progress w-100"
                          style={{ maxWidth: "15rem", height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-green"
                            role="progressbar"
                            style={{ width: "45%", height: "6px" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body p-3">
                  <div className="row align-items-center gx-lg-5 gy-3">
                    <div className="col-lg-6 border-lg-end">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid shadow-sm"
                            src="img/project-3.jpg"
                            alt="..."
                            width="50"
                          />
                          <div className="ms-3">
                            <h3 className="h4 text-gray-700 mb-0">
                              Project Title
                            </h3>
                            <small className="text-gray-500">
                              Lorem Ipsum Dolor
                            </small>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 d-none d-sm-block">
                          Today at 4:24 AM
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <p className="d-flex mb-0 text-gray-600 text-sm d-flex align-items-center flex-shrink-0">
                          <i className="far fa-clock me-1"></i>12:00 PM
                        </p>
                        <p className="d-flex mb-0 mx-3 text-gray-600 text-sm d-flex align-items-center flex-shrink-0">
                          <i className="far fa-comment me-1"></i>20
                        </p>
                        <div
                          className="progress w-100"
                          style={{ maxWidth: "15rem", height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-violet"
                            role="progressbar"
                            style={{ width: "45%", height: "6px" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-0">
                <div className="card-body p-3">
                  <div className="row align-items-center gx-lg-5 gy-3">
                    <div className="col-lg-6 border-lg-end">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid shadow-sm"
                            src="img/project-4.jpg"
                            alt="..."
                            width="50"
                          />
                          <div className="ms-3">
                            <h3 className="h4 text-gray-700 mb-0">
                              Project Title
                            </h3>
                            <small className="text-gray-500">
                              Lorem Ipsum Dolor
                            </small>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 d-none d-sm-block">
                          Today at 4:24 AM
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <p className="d-flex mb-0 text-gray-600 text-sm d-flex align-items-center flex-shrink-0">
                          <i className="far fa-clock me-1"></i>12:00 PM
                        </p>
                        <p className="d-flex mb-0 mx-3 text-gray-600 text-sm d-flex align-items-center flex-shrink-0">
                          <i className="far fa-comment me-1"></i>20
                        </p>
                        <div
                          className="progress w-100"
                          style={{ maxWidth: "15rem", height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-orange"
                            role="progressbar"
                            style={{ width: "45%", height: "6px" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

      {/* <section className="pb-0">
            <div className="container-fluid">
              <div className="row gy-4">

                <div className="col-lg-4">
                  <div className="card mb-0">
                    <div className="card-close">
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle text-sm"
                          type="button"
                          id="closeCard1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end shadow-sm"
                          aria-labelledby="closeCard1"
                        >
                          <a
                            className="dropdown-item py-1 px-3 remove"
                            href="/"
                          >
                            <i className="fas fa-times"></i>Close
                          </a>
                          <a className="dropdown-item py-1 px-3 edit" href="/">
                            <i className="fas fa-cog"></i>Edit
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h3 className="mb-1">Work Hours</h3>
                      <small className="text-gray-500 d-block mb-0">
                        Lorem ipsum dolor sit amet.
                      </small>
                      <div className="pie-with-centered-text text-center my-5">
                        <canvas className="z-index-20" id="pieChart"></canvas>
                        <div className="text">
                          <strong className="d-block lh-1 text-lg">90</strong>
                          <span className="text-gray-500">Hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card mb-0">
                    <div className="card-close">
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle text-sm"
                          type="button"
                          id="closeCard1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end shadow-sm"
                          aria-labelledby="closeCard1"
                        >
                          <a
                            className="dropdown-item py-1 px-3 remove"
                            href="/"
                          >
                            <i className="fas fa-times"></i>Close
                          </a>
                          <a className="dropdown-item py-1 px-3 edit" href="/">
                            <i className="fas fa-cog"></i>Edit
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <div className="client-avatar mb-3">
                        <img
                          className="img-fluid rounded-circle shadow-0"
                          src={avatar2}
                          alt="..."
                        />
                        <div className="status bg-green"></div>
                      </div>
                      <h3 className="fw-normal">Jason Doe</h3>
                      <p className="text-sm text-gray-500 mb-1">
                        Web Developer
                      </p>
                      <a
                        className="btn btn-faintGreen btn-sm text-white px-4 rounded-pill py-0"
                        href="/"
                      >
                        Follow
                      </a>
                      <div className="row py-4 gy-3">
                        <div className="col-4">
                          <strong className="d-block lh-1">20</strong>
                          <small>Photos</small>
                        </div>
                        <div className="col-4">
                          <strong className="d-block lh-1">54</strong>
                          <small>Videos</small>
                        </div>
                        <div className="col-4">
                          <strong className="d-block lh-1">235</strong>
                          <small>Tasks</small>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <a
                          className="text-gray-500 text-sm"
                          href="/"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="text-gray-500 text-sm"
                          href="/"
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="text-gray-500 text-sm"
                          href="/"
                          target="_blank"
                        >
                          <i className="fab fa-google"></i>
                        </a>
                        <a
                          className="text-gray-500 text-sm"
                          href="/"
                          target="_blank"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          className="text-gray-500 text-sm"
                          href="/"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card mb-0">
                    <div className="card-close">
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle text-sm"
                          type="button"
                          id="closeCard1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end shadow-sm"
                          aria-labelledby="closeCard1"
                        >
                          <a
                            className="dropdown-item py-1 px-3 remove"
                            href="/"
                          >
                            <i className="fas fa-times"></i>Close
                          </a>
                          <a className="dropdown-item py-1 px-3 edit" href="/">
                            <i className="fas fa-cog"></i>Edit
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h3>Total Overdue</h3>
                      <p className="small mb-5 text-gray-500">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <p className="text-xl text-center fw-normal">$20,000</p>
                      <div className="chart mt-auto">
                        <canvas id="lineChart1"> </canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

      {/* 
          <section className="pb-0">
            <div className="container-fluid">
              <div className="row gy-4">

                <div className="col-lg-6">
                  <div className="card mb-0">
                    <div className="card-header position-relative">
                      <div className="card-close">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle text-sm"
                            type="button"
                            id="closeCard1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end shadow-sm"
                            aria-labelledby="closeCard1"
                          >
                            <a
                              className="dropdown-item py-1 px-3 remove"
                              href="/"
                            >
                              <i className="fas fa-times"></i>Close
                            </a>
                            <a
                              className="dropdown-item py-1 px-3 edit"
                              href="/"
                            >
                              <i className="fas fa-cog"></i>Edit
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="h3 mb-0 d-flex align-items-center">
                        Trending Articles
                        <span className="badge rounded-pill bg-green ms-2 text-xs">
                          4 New
                        </span>
                      </h2>
                    </div>
                    <div className="card-body p-0">
                      <div className="p-3 d-flex align-items-center">
                        <img
                          className="img-fluid rounded-circle p-1 border border-faintGreen flex-shrink-0"
                          src={avatar1}
                          alt="..."
                          width="50"
                        />
                        <div className="ms-3">
                          <a className="d-block" href="/">
                            <h3 className="h5 fw-normal text-dark mb-0">
                              Lorem Ipsum Dolor
                            </h3>
                          </a>
                          <small className="text-gray-500">
                            Posted on 5th June 2017 by Aria Smith.
                          </small>
                        </div>
                      </div>
                      <div className="p-3 d-flex align-items-center bg-light">
                        <img
                          className="img-fluid rounded-circle p-1 border border-faintGreen flex-shrink-0"
                          src={avatar2}
                          alt="..."
                          width="50"
                        />
                        <div className="ms-3">
                          <a className="d-block" href="/">
                            <h3 className="h5 fw-normal text-dark mb-0">
                              Lorem Ipsum Dolor
                            </h3>
                          </a>
                          <small className="text-gray-500">
                            Posted on 5th June 2017 by Frank Williams.
                          </small>
                        </div>
                      </div>
                      <div className="p-3 d-flex align-items-center">
                        <img
                          className="img-fluid rounded-circle p-1 border border-faintGreen flex-shrink-0"
                          src={avatar3}
                          alt="..."
                          width="50"
                        />
                        <div className="ms-3">
                          <a className="d-block" href="/">
                            <h3 className="h5 fw-normal text-dark mb-0">
                              Lorem Ipsum Dolor
                            </h3>
                          </a>
                          <small className="text-gray-500">
                            Posted on 5th June 2017 by Ashley Wood.
                          </small>
                        </div>
                      </div>
                      <div className="p-3 d-flex align-items-center bg-light">
                        <img
                          className="img-fluid rounded-circle p-1 border border-faintGreen flex-shrink-0"
                          src={avatar4}
                          alt="..."
                          width="50"
                        />
                        <div className="ms-3">
                          <a className="d-block" href="/">
                            <h3 className="h5 fw-normal text-dark mb-0">
                              Lorem Ipsum Dolor
                            </h3>
                          </a>
                          <small className="text-gray-500">
                            Posted on 5th June 2017 by Jason Doe.
                          </small>
                        </div>
                      </div>
                      <div className="p-3 d-flex align-items-center">
                        <img
                          className="img-fluid rounded-circle p-1 border border-faintGreen flex-shrink-0"
                          src={avatar5}
                          alt="..."
                          width="50"
                        />
                        <div className="ms-3">
                          <a className="d-block" href="/">
                            <h3 className="h5 fw-normal text-dark mb-0">
                              Lorem Ipsum Dolor
                            </h3>
                          </a>
                          <small className="text-gray-500">
                            Posted on 5th June 2017 by Sam Martinez.
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card rounded-0 mb-0">
                    <div className="card-header position-relative px-4">
                      <div className="card-close">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle text-sm"
                            type="button"
                            id="closeCard1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end shadow-sm"
                            aria-labelledby="closeCard1"
                          >
                            <a
                              className="dropdown-item py-1 px-3 remove"
                              href="/"
                            >
                              <i className="fas fa-times"></i>Close
                            </a>
                            <a
                              className="dropdown-item py-1 px-3 edit"
                              href="/"
                            >
                              <i className="fas fa-cog"></i>Edit
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2 className="h3 mb-0">To Do List </h2>
                    </div>
                    <div className="card-body p-0">
                      <div className="p-3">
                        <div className="form-check mb-0 py-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="input-1"
                            id="input-1"
                            checked
                          />
                          <label
                            className="form-check-label text-gray-600 text-sm"
                            for="input-1"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </label>
                        </div>
                      </div>
                      <div className="p-3 bg-light">
                        <div className="form-check mb-0 py-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="input-2"
                            id="input-2"
                            checked
                          />
                          <label
                            className="form-check-label text-gray-600 text-sm"
                            for="input-2"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </label>
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="form-check mb-0 py-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="input-3"
                            id="input-3"
                          />
                          <label
                            className="form-check-label text-gray-600 text-sm"
                            for="input-3"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </label>
                        </div>
                      </div>
                      <div className="p-3 bg-light">
                        <div className="form-check mb-0 py-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="input-4"
                            id="input-4"
                          />
                          <label
                            className="form-check-label text-gray-600 text-sm"
                            for="input-4"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </label>
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="form-check mb-0 py-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="input-5"
                            id="input-5"
                          />
                          <label
                            className="form-check-label text-gray-600 text-sm"
                            for="input-5"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </label>
                        </div>
                      </div>
                      <div className="p-3 bg-light">
                        <div className="form-check mb-0 py-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="input-6"
                            id="input-6"
                          />
                          <label
                            className="form-check-label text-gray-600 text-sm"
                            for="input-6"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

      {/* <section>
            <div className="container-fluid">
              <div className="row gy-4">
                <div className="col-lg-4">
                  <div className="card mb-0">
                    <div className="card-header position-relative px-4">
                      <div className="card-close">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle text-sm"
                            type="button"
                            id="closeCard1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end shadow-sm"
                            aria-labelledby="closeCard1"
                          >
                            <a
                              className="dropdown-item py-1 px-3 remove"
                              href="/"
                            >
                              <i className="fas fa-times"></i>Close
                            </a>
                            <a
                              className="dropdown-item py-1 px-3 edit"
                              href="/"
                            >
                              <i className="fas fa-cog"></i>Edit
                            </a>
                          </div>
                        </div>
                      </div>
                      <h3 className="h4 mb-0">Recent Updates</h3>
                    </div>
                    <div className="card-body p-0">
                      <div className="p-3 d-flex justify-content-between">
                        <div className="d-flex">
                          <i className="fas fa-rss text-gray-600"></i>
                          <div className="ms-3">
                            <h5 className="fw-normal text-gray-600 mb-1">
                              Lorem ipsum dolor sit amet.
                            </h5>
                            <p className="mb-0 text-xs text-gray-500">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit sed.
                            </p>
                          </div>
                        </div>
                        <div className="text-end ms-2">
                          <strong className="d-block lh-1 h2 mb-0 text-gray-500">
                            24
                          </strong>
                          <small className="d-block lh-1 text-gray-500">
                            May
                          </small>
                        </div>
                      </div>

                      <div className="p-3 d-flex justify-content-between bg-light">
                        <div className="d-flex">
                          <i className="fas fa-rss text-gray-600"></i>
                          <div className="ms-3">
                            <h5 className="fw-normal text-gray-600 mb-1">
                              Lorem ipsum dolor sit amet.
                            </h5>
                            <p className="mb-0 text-xs text-gray-500">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit sed.
                            </p>
                          </div>
                        </div>
                        <div className="text-end ms-2">
                          <strong className="d-block lh-1 h2 mb-0 text-gray-500">
                            24
                          </strong>
                          <small className="d-block lh-1 text-gray-500">
                            May
                          </small>
                        </div>
                      </div>

                      <div className="p-3 d-flex justify-content-between">
                        <div className="d-flex">
                          <i className="fas fa-rss text-gray-600"></i>
                          <div className="ms-3">
                            <h5 className="fw-normal text-gray-600 mb-1">
                              Lorem ipsum dolor sit amet.
                            </h5>
                            <p className="mb-0 text-xs text-gray-500">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit sed.
                            </p>
                          </div>
                        </div>
                        <div className="text-end ms-2">
                          <strong className="d-block lh-1 h2 mb-0 text-gray-500">
                            24
                          </strong>
                          <small className="d-block lh-1 text-gray-500">
                            May
                          </small>
                        </div>
                      </div>

                      <div className="p-3 d-flex justify-content-between bg-light">
                        <div className="d-flex">
                          <i className="fas fa-rss text-gray-600"></i>
                          <div className="ms-3">
                            <h5 className="fw-normal text-gray-600 mb-1">
                              Lorem ipsum dolor sit amet.
                            </h5>
                            <p className="mb-0 text-xs text-gray-500">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit sed.
                            </p>
                          </div>
                        </div>
                        <div className="text-end ms-2">
                          <strong className="d-block lh-1 h2 mb-0 text-gray-500">
                            24
                          </strong>
                          <small className="d-block lh-1 text-gray-500">
                            May
                          </small>
                        </div>
                      </div>

                      <div className="p-3 d-flex justify-content-between">
                        <div className="d-flex">
                          <i className="fas fa-rss text-gray-600"></i>
                          <div className="ms-3">
                            <h5 className="fw-normal text-gray-600 mb-1">
                              Lorem ipsum dolor sit amet.
                            </h5>
                            <p className="mb-0 text-xs text-gray-500">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit sed.
                            </p>
                          </div>
                        </div>
                        <div className="text-end ms-2">
                          <strong className="d-block lh-1 h2 mb-0 text-gray-500">
                            24
                          </strong>
                          <small className="d-block lh-1 text-gray-500">
                            May
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card mb-0">
                    <div className="card-header position-relative">
                      <div className="card-close">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle text-sm"
                            type="button"
                            id="closeCard1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end shadow-sm"
                            aria-labelledby="closeCard1"
                          >
                            <a
                              className="dropdown-item py-1 px-3 remove"
                              href="/"
                            >
                              <i className="fas fa-times"></i>Close
                            </a>
                            <a
                              className="dropdown-item py-1 px-3 edit"
                              href="/"
                            >
                              <i className="fas fa-cog"></i>Edit
                            </a>
                          </div>
                        </div>
                      </div>
                      <h3 className="h4 mb-0">Daily Feeds</h3>
                    </div>
                    <div className="card-body p-0">
                      <div className="p-3 border-bottom border-gray-200">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <a className="flex-shrink-0" href="/">
                              <img
                                className="img-fluid rounded-circle"
                                src={avatar5}
                                alt="person"
                                width="50"
                              />
                            </a>
                            <div className="ms-3">
                              <h5>Aria Smith</h5>
                              <p className="mb-0 text-xs text-gray-600 lh-1">
                                Posted a new blog
                              </p>
                              <small className="text-gray-600 fw-light">
                                Today 5:60 pm - 12.06.2014
                              </small>
                            </div>
                          </div>
                          <div className="text-right">
                            <small className="text-gray-500">5min ago</small>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 border-bottom border-gray-200">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <a className="flex-shrink-0" href="/">
                              <img
                                className="img-fluid rounded-circle"
                                src={avatar2}
                                alt="person"
                                width="50"
                              />
                            </a>
                            <div className="ms-3">
                              <h5>Frank Williams</h5>
                              <p className="mb-0 text-xs text-gray-600 lh-1">
                                Posted a new blog
                              </p>
                              <small className="text-gray-600 fw-light">
                                Today 5:60 pm - 12.06.2014
                              </small>
                              <div className="d-flex">
                                <a
                                  className="btn btn-sm btn-secondary py-1 m-1"
                                  href="/"
                                >
                                  <i className="fas fa-thumbs-up me-1"></i>
                                  Like
                                </a>
                                <a
                                  className="btn btn-sm btn-secondary py-1 m-1"
                                  href="/"
                                >
                                  <i className="fas fa-heart me-1"> </i>Love
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <small className="text-gray-500">5min ago</small>
                          </div>
                        </div>
                      </div>

                      <div className="p-3">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <a className="flex-shrink-0" href="/">
                              <img
                                className="img-fluid rounded-circle"
                                src={avatar3}
                                alt="person"
                                width="50"
                              />
                            </a>
                            <div className="ms-3">
                              <h5>Ashley Wood</h5>
                              <p className="mb-0 text-xs text-gray-600 lh-1">
                                Posted a new blog
                              </p>
                              <small className="text-gray-600 fw-light">
                                Today 5:60 pm - 12.06.2014
                              </small>
                            </div>
                          </div>
                          <div className="text-right">
                            <small className="text-gray-500">5min ago</small>
                          </div>
                        </div>
                        <div className="mt-3 ms-5 ps-3">
                          <div className="bg-light p-3 shadow-sm">
                            <small className="text-gray-600">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s. Over the years.
                            </small>
                          </div>
                          <div className="text-end mt-1">
                            <a
                              className="btn btn-sm btn-secondary py-1"
                              href="/"
                            >
                              <i className="fas fa-thumbs-up me-1"></i>Like
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card mb-0">
                    <div className="card-header position-relative">
                      <div className="card-close">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle text-sm"
                            type="button"
                            id="closeCard1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end shadow-sm"
                            aria-labelledby="closeCard1"
                          >
                            <a
                              className="dropdown-item py-1 px-3 remove"
                              href="/"
                            >
                              <i className="fas fa-times"></i>Close
                            </a>
                            <a
                              className="dropdown-item py-1 px-3 edit"
                              href="/"
                            >
                              <i className="fas fa-cog"></i>Edit
                            </a>
                          </div>
                        </div>
                      </div>
                      <h3 className="h4 mb-0">Recent Activities</h3>
                    </div>
                    <div className="card-body p-0">
                      <div className="row g-0 border-bottom border-gray-200">
                        <div className="col-sm-4 col-3 text-end">
                          <ul className="list-inline mb-0">
                            <li>
                              <div className="d-inline-block p-2 bg-light">
                                <i className="far fa-clock fa-fw"></i>
                              </div>
                            </li>
                            <li className="me-2">
                              <span className="small text-gray-500">
                                6:00 am
                              </span>
                            </li>
                            <li className="me-2">
                              <span className="small text-info lh-1 d-block">
                                6 hours ago
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-8 col-9 border-start border-gray-200 p-3">
                          <h5 className="fw-normal">Meeting</h5>
                          <p className="small mb-0 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud.
                          </p>
                        </div>
                      </div>
                      <div className="row g-0 border-bottom border-gray-200">
                        <div className="col-sm-4 col-3 text-end">
                          <ul className="list-inline mb-0">
                            <li>
                              <div className="d-inline-block p-2 bg-light">
                                <i className="far fa-clock fa-fw"></i>
                              </div>
                            </li>
                            <li className="me-2">
                              <span className="small text-gray-500">
                                6:00 am
                              </span>
                            </li>
                            <li className="me-2">
                              <span className="small text-info lh-1 d-block">
                                6 hours ago
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-8 col-9 border-start border-gray-200 p-3">
                          <h5 className="fw-normal">Meeting</h5>
                          <p className="small mb-0 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud.
                          </p>
                        </div>
                      </div>
                      <div className="row g-0">
                        <div className="col-sm-4 col-3 text-end">
                          <ul className="list-inline mb-0">
                            <li>
                              <div className="d-inline-block p-2 bg-light">
                                <i className="far fa-clock fa-fw"></i>
                              </div>
                            </li>
                            <li className="me-2">
                              <span className="small text-gray-500">
                                6:00 am
                              </span>
                            </li>
                            <li className="me-2">
                              <span className="small text-info lh-1 d-block">
                                6 hours ago
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-8 col-9 border-start border-gray-200 p-3">
                          <h5 className="fw-normal">Meeting</h5>
                          <p className="small mb-0 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
    </Layout>
  );
}

export default Dashboard;
