import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./LessonPage.css";
import Layout from "../../components/Layout/Layout";
import VideoFrame from "../../components/Lessons/VideoFrame";
import { useLessons } from "../../context/LessonsContext";
import QuestionCard from "../../components/Lessons/QuestionCard";
import axios from "../../components/axios/axios";
import { toast } from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";

function LessonPage() {
  const { lessonID } = useParams();
  const { getLesson } = useLessons();

  const { fetchLatestUserData } = useUserContext();

  const [lesson, setLesson] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLesson(() => getLesson(lessonID));
    setIsLoading(false);
  }, [getLesson, lessonID]);

  function markLessonAsCompleted() {
    axios.get(`/lessons/${lessonID}/mark`).then((res) => {
      if (res?.data?.status) {
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }

      fetchLatestUserData();
    });
  }

  if (!lesson && !isLoading)
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
              Topic:{" "}
              <span className="fw-normal text-dark">{lesson?.title}</span>
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
            Enjoy this lesson, Buddy!
          </h3>
        </div>
        <div className="card-body">
          <VideoFrame src={lesson?.video?.url} />
        </div>
      </div>

      {/* A Short Quiz */}
      {lesson?.classDrill.length > 0 && (
        <div className="card">
          <div className="card-header">
            <h3 className="mb-0 text-palatinateBlue fw-normal">
              It's time for a class drill, Champ!
            </h3>
          </div>
          <div className="card-body">
            {lesson?.classDrill?.map((question, key) => (
              <QuestionCard
                key={key}
                serialNumber={key + 1}
                question={question}
              />
            ))}
          </div>
        </div>
      )}

      {/* Navigation Button */}
      <div className="d-flex justify-content-end">
        <div className="btn-group">
          <Link
            to={`/lessons/${lesson?.id - 1}`}
            className="btn btn-outline-primary lessonNavBtn"
          >
            Previous
          </Link>
          <button
            className="btn btn-outline-primary lessonNavBtn"
            onClick={markLessonAsCompleted}
          >
            Mark Lesson as Completed
          </button>
          <Link
            to={`/lessons/${lesson?.id + 1}`}
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
