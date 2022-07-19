import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./LessonPage.css";
import Layout from "../../components/Layout/Layout";
// import vid01 from "../../assets/videos/lesson01.mp4";
import VideoFrame from "../../components/Lessons/VideoFrame";
import { useLessons } from "../../context/LessonsContext";

function LessonPage() {
  const { lessonID } = useParams();
  const { getLesson } = useLessons();

  const [lesson, setLesson] = useState();

  useEffect(() => setLesson(() => getLesson(lessonID)), [getLesson, lessonID]);

  if (!lesson)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h1>
          Lesson not found.{" "}
          <Link to={"/lessons"}>Please go back to the lessons page</Link>
        </h1>
      </div>
    );

  return (
    <Layout
      subTitle={{
        previous: { title: "Lessons", reference: "/lessons" },
        current: lesson?.title,
      }}
    >
      {/* Lesson title */}
      <div className="card p-3">
        <div className="d-flex align-items-center justify-content-between gx-lg-5 gy-3">
          <div className="d-flex align-items-center">
            <h2 className="fw-bold  text-palatinateBlue mb-0">
              Topic: <span className="fw-normal text-dark">{lesson.title}</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Learning objectives */}
      <div className="card">
        <div className="card-header">
          <h3 className="mb-0 text-palatinateBlue fw-normal">
            Learning Objectives
          </h3>
        </div>
        <div className="card-body">
          <h5 className="fw-normal">
            At the end of this lesson, you would have been exposed to:
          </h5>
          <ol>
            {lesson?.objectives.map((objective, key) => (
              <li key={key}>{objective}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Instructional Video */}
      <div className="card">
        <div className="card-header">
          <h3 className="mb-0 text-palatinateBlue fw-normal">
            Enjoy this lesson buddy!
          </h3>
        </div>
        <div className="card-body">
          <VideoFrame src={lesson?.video?.url} />
        </div>
      </div>

      {/* A Short Quiz */}
      <div className="card">
        <div className="card-header">
          <h3 className="mb-0 text-palatinateBlue fw-normal">
            Let's have some fun with these questions!
          </h3>
        </div>
        <div className="card-body">
          {/* Question Card */}
          <div className="card">
            <div className="card-header">
              <p className="mb-0">Who inventend Calculus?</p>
            </div>
            <div className="card-body p-0">
              <div className="p-3">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-1"
                    id="option-11"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-11"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </label>
                </div>
              </div>
              <div className="p-3 bg-light">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-1"
                    id="option-12"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-12"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </label>
                </div>
              </div>
              <div className="p-3">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-1"
                    id="option-13"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-13"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </label>
                </div>
              </div>
              <div className="p-3 bg-light">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-1"
                    id="option-14"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-14"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
          {/* Question Card */}
          <div className="card">
            <div className="card-header">
              <p className="mb-0">Who inventend Calculus?</p>
            </div>
            <div className="card-body p-0">
              <div className="p-3">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-2"
                    id="option-21"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-21"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </label>
                </div>
              </div>
              <div className="p-3 bg-light">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-2"
                    id="option-22"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-22"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </label>
                </div>
              </div>
              <div className="p-3">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-2"
                    id="option-23"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-23"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </label>
                </div>
              </div>
              <div className="p-3 bg-light">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-2"
                    id="option-24"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-24"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
          {/* Question Card */}
          <div className="card">
            <div className="card-header">
              <p className="mb-0">Who inventend Calculus?</p>
            </div>
            <div className="card-body p-0">
              <div className="p-3">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-3"
                    id="option-31"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-31"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </label>
                </div>
              </div>
              <div className="p-3 bg-light">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-3"
                    id="option-32"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-32"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </label>
                </div>
              </div>
              <div className="p-3">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-3"
                    id="option-33"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-33"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </label>
                </div>
              </div>
              <div className="p-3 bg-light">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-3"
                    id="option-34"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-34"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
          {/* Question Card */}
          <div className="card">
            <div className="card-header">
              <p className="mb-0">Who inventend Calculus?</p>
            </div>
            <div className="card-body p-0">
              <div className="p-3">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-4"
                    id="option-41"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-41"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </label>
                </div>
              </div>
              <div className="p-3 bg-light">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-4"
                    id="option-42"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-42"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </label>
                </div>
              </div>
              <div className="p-3">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-4"
                    id="option-43"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-43"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </label>
                </div>
              </div>
              <div className="p-3 bg-light">
                <div className="form-check mb-0 py-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="option-4"
                    id="option-44"
                  />
                  <label
                    className="form-check-label text-gray-600 text-sm"
                    for="option-44"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
        </div>
      </div>

      {/* Navigation Button */}
      <div className="d-flex justify-content-end">
        <div className="btn-group">
          <Link
            to={`/lessons/${lesson.id - 1}`}
            className="btn btn-outline-primary lessonNavBtn"
          >
            Previous
          </Link>
          <Link
            to={`/lessons/${lesson.id + 1}`}
            className="btn btn-outline-primary lessonNavBtn"
          >
            Next
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default LessonPage;
