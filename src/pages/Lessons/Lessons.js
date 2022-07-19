import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useLessons } from "../../context/LessonsContext";

function Lessons() {
  const { lessons } = useLessons();

  return (
    <Layout pageTitle="Lessons">
      {lessons?.map((lesson, key) => (
        <Link to={`/lessons/${lesson.id}`} key={key} className="card mb-3 p-3">
          <div className="d-flex align-items-center justify-content-between gx-lg-5 gy-3">
            <div className="d-flex align-items-center">
              <svg
                className={`svg-icon svg-icon-sm svg-icon-light me-2 flex-shrink-0 ${
                  lesson.status === "completed"
                    ? "text-success"
                    : lesson.status === "pending"
                    ? "text-orange"
                    : "text-palatinateBlue"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="ms-3">
                <h3 className="h5 fw-normal text-dark mb-0">
                  {key + 1}. {lesson.title}
                </h3>
              </div>
            </div>
            <div className="text-sm text-gray-600 d-flex align-items-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  "svg-icon svg-icon-sm svg-icon-light me-2 flex-shrink-0"
                }
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <small>{lesson?.video?.time}</small>
            </div>
          </div>
        </Link>
      ))}
    </Layout>
  );
}

export default Lessons;
