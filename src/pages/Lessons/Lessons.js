import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

function Lessons() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    setLessons([
      {
        id: 1,
        title: "Introduction to Calculus",
        descr: "Lorem Ipsum Dolor",
        duration: "20 mins",
        status: "completed",
      },
      {
        id: 2,
        title: "Branches of Calculus",
        descr: "Lorem Ipsum Dolor",
        duration: "20 mins",
        status: "pending",
      },
      {
        id: 3,
        title: "Differential Calculus",
        descr: "Lorem Ipsum Dolor",
        duration: "20 mins",
        status: "completed",
      },
      {
        id: 4,
        title: "Integral Calculus",
        descr: "Lorem Ipsum Dolor",
        duration: "20 mins",
        status: "not started",
      },
      {
        id: 5,
        title: "Limits & Continuity",
        descr: "Lorem Ipsum Dolor",
        duration: "20 mins",
        status: "pending",
      },
    ]);
  }, []);

  return (
    <Layout pageTitle="Lessons">
      {lessons?.map((lesson, key) => (
        <Link to={`/lessons/${lesson.id}`} key={key} className="card mb-3 p-3">
          <div className="d-flex align-items-center justify-content-between gx-lg-5 gy-3">
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`svg-icon svg-icon-sm svg-icon-light me-2 flex-shrink-0 ${
                  lesson.status === "completed"
                    ? "text-success"
                    : lesson.status === "pending"
                    ? "text-orange"
                    : "text-paleBlue"
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
                <h3 className="h5 fw-normal text-dark mb-0">{lesson.title}</h3>
                <small className="text-gray-500">{lesson.descr}</small>
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
              <small>{lesson.duration}</small>
            </div>
          </div>
        </Link>
      ))}
    </Layout>
  );
}

export default Lessons;
