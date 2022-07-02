import React from "react";
import Layout from "../../components/Layout/Layout";
import avatar2 from "../../assets/img/avatar-2.jpg";

function Profile() {
  return (
    <Layout pageTitle={"Profile"}>
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
                <a className="dropdown-item py-1 px-3 remove" href="/">
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
            <p className="text-sm text-gray-500 mb-1">Web Developer</p>
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
              <a className="text-gray-500 text-sm" href="/" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-gray-500 text-sm" href="/" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-gray-500 text-sm" href="/" target="_blank">
                <i className="fab fa-google"></i>
              </a>
              <a className="text-gray-500 text-sm" href="/" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-gray-500 text-sm" href="/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
