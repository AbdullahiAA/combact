import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useLessons } from "../../context/LessonsContext";

function QuizPage() {
  const { lessonID } = useParams();
  const { getLesson } = useLessons();

  const [lesson, setLesson] = useState();
  const [quizzes, setQuizzes] = useState([]);

  //   Get the lessons info
  useEffect(() => {
    setLesson(() => getLesson(lessonID));
  }, [getLesson, lessonID]);

  //   Get the quiz questions
  useEffect(() => {
    setQuizzes(() => lesson?.quiz);
  }, [lesson, lessonID]);

  return (
    <Layout
      subTitle={{
        previous: { title: "Quizzes", reference: "/quizzes" },
        current: "Quiz " + lessonID,
      }}
    >
      {/* Quiz title */}
      <div className="card p-3">
        <div className="d-flex align-items-center justify-content-between gx-lg-5 gy-3">
          <div className="d-flex align-items-center">
            <h3 className="fw-bold  text-palatinateBlue mb-0">
              Quiz {lessonID}:{" "}
              <span className="fw-normal text-dark">{lesson?.title}</span>
            </h3>
          </div>
        </div>
      </div>

      {/* Question Card */}
      {quizzes?.map((quiz, key) => (
        <div className="card" key={key}>
          <div className="card-header">
            <p className="mb-0">
              {key + 1}. {quiz?.question}
            </p>
          </div>
          <div className="card-body p-0">
            <div className="p-3">
              <div className="form-check mb-0 py-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question_${key + 1}`}
                  id={`option_${key + 1}_a`}
                />
                <label
                  className="form-check-label text-gray-600 text-sm"
                  htmlFor={`option_${key + 1}_a`}
                >
                  {quiz?.a}
                </label>
              </div>
            </div>
            <div className="p-3 bg-light">
              <div className="form-check mb-0 py-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question_${key + 1}`}
                  id={`option_${key + 1}_b`}
                />
                <label
                  className="form-check-label text-gray-600 text-sm"
                  htmlFor={`option_${key + 1}_b`}
                >
                  {quiz?.b}
                </label>
              </div>
            </div>
            <div className="p-3">
              <div className="form-check mb-0 py-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question_${key + 1}`}
                  id={`option_${key + 1}_c`}
                />
                <label
                  className="form-check-label text-gray-600 text-sm"
                  htmlFor={`option_${key + 1}_c`}
                >
                  {quiz?.c}
                </label>
              </div>
            </div>
            <div className="p-3 bg-light">
              <div className="form-check mb-0 py-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question_${key + 1}`}
                  id={`option_${key + 1}_d`}
                />
                <label
                  className="form-check-label text-gray-600 text-sm"
                  htmlFor={`option_${key + 1}_d`}
                >
                  {quiz?.d}
                </label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-outline-success" type="button">
              Submit
            </button>
          </div>
        </div>
      ))}
    </Layout>
  );
}

export default QuizPage;
