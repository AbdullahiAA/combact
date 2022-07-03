import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./LessonPage.css";
import Layout from "../../components/Layout/Layout";
import vid01 from "../../assets/videos/lesson01.mp4";
import VideoFrame from "../../components/Lessons/VideoFrame";

function LessonPage() {
  const { lessonID } = useParams();
  const [lesson, setLesson] = useState({});

  const [lessons] = useState([
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

  useEffect(() => {
    setLesson(() => lessons.find((lesson) => lesson.id === parseInt(lessonID)));
  }, [lessonID, lessons]);

  if (!lesson) return "Invalid lesson";

  return (
    <Layout
      subTitle={{
        previous: { title: "Lessons", reference: "/lessons" },
        current: lesson?.title,
      }}
    >
      {/* Learning objectives */}
      <div className="card">
        <div className="card-header">
          <h3 className="mb-0 text-paleBlue">Learning Objectives</h3>
        </div>
        <div className="card-body">
          <h5 className="fw-normal">
            At the end of this lesson, you would have been exposed to:
          </h5>
          <ol>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              id tempore nobis!
            </li>
          </ol>
        </div>
      </div>

      {/* Instructional Video */}
      <div className="card">
        <div className="card-header">
          <h3 className="mb-0 text-paleBlue fw-normal">
            Enjoy this lesson buddy!
          </h3>
        </div>
        <div className="card-body">
          <VideoFrame src={vid01} title={lesson?.title} />
        </div>
      </div>

      {/* A Short Quiz */}
      <div className="card">
        <div className="card-header">
          <h3 className="mb-0 text-paleBlue fw-normal">
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
              <button
                className="btn btn-outline-faintGreen btn-sm"
                type="button"
              >
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
              <button
                className="btn btn-outline-faintGreen btn-sm"
                type="button"
              >
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
              <button
                className="btn btn-outline-faintGreen btn-sm"
                type="button"
              >
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
              <button
                className="btn btn-outline-faintGreen btn-sm"
                type="button"
              >
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
            className="btn btn-outline-primary btn-lg"
          >
            Previous
          </Link>
          <Link
            to={`/lessons/${lesson.id + 1}`}
            className="btn btn-outline-primary btn-lg"
          >
            Next
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default LessonPage;
