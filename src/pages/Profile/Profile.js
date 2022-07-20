import React from "react";
import Layout from "../../components/Layout/Layout";
import { useUserContext } from "../../context/UserContext";
// import avatar2 from "../../assets/img/avatar-2.jpg";

function Profile() {
  const { userData } = useUserContext();

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
              {/* <img
                className="img-fluid rounded-circle shadow-0"
                src={avatar2}
                alt="..."
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="shadow-0 img-fluid rounded-circle"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="fw-normal">{userData?.student?.name}</h3>
            <p className="text-sm text-gray-500 mb-1">
              {userData?.student?.school_name}
            </p>
            <p className="btn btn-faintGreen btn-sm text-white px-4 rounded-pill py-0">
              {userData?.student?.email}
            </p>
            <div className="row py-4 gy-3">
              <div className="col-4">
                <strong className="d-block lh-1">
                  {userData?.student?.completed_lessons.length}
                </strong>
                <small>Lessons</small>
              </div>
              <div className="col-4">
                <strong className="d-block lh-1">
                  {userData?.student?.attempted_quizzes.length}
                </strong>
                <small>Quizzes</small>
              </div>
              <div className="col-4">
                <strong className="d-block lh-1">
                  {userData?.student?.rank}
                </strong>
                <small>Rank</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
