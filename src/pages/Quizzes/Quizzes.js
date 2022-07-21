import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useLessons } from "../../context/LessonsContext";
import { useUserContext } from "../../context/UserContext";

function Quizzes() {
  const { lessons } = useLessons();
  const { userData } = useUserContext();

  const [attemptedQuizzes, setAttemptedQuizzes] = useState([]);

  useEffect(() => {
    setAttemptedQuizzes(userData?.student?.attempted_quizzes);
  }, [userData]);

  return (
    <Layout pageTitle={"Quizzes"}>
      <h3 className="fw-normal mb-4">
        It's great to have you here champ! Let's get some quizzes done
      </h3>

      {lessons.map((lesson, key) => (
        <Link to={`/quizzes/${lesson.id}`} key={key} className="card mb-3 p-3">
          <div className="d-flex align-items-center gap-0">
            {/* Differentiate the one that has been completed from the other */}
            {attemptedQuizzes?.includes(lesson.id.toString()) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon svg-icon-sm svg-icon-light svg-icon-solid text-green flex-shrink-0 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="svg-icon svg-icon-sm svg-icon-light flex-shrink-0 text-palatinateBlue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            )}
            <div className="ms-3">
              <h3 className="h5 fw-normal text-dark mb-0">Quiz {key + 1}</h3>
            </div>
          </div>
        </Link>
      ))}
    </Layout>
  );
}

export default Quizzes;
