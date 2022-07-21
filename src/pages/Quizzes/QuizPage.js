import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../components/axios/axios";
import Layout from "../../components/Layout/Layout";
import QuestionCard from "../../components/Lessons/QuestionCard";
import { useLessons } from "../../context/LessonsContext";
import { useUserContext } from "../../context/UserContext";
import { toast } from "react-hot-toast";

function QuizPage() {
  const { lessonID } = useParams();
  const { getLesson } = useLessons();

  const { fetchLatestUserData } = useUserContext();

  const [lesson, setLesson] = useState();
  const [quizzes, setQuizzes] = useState([]);

  function markQuizAsCompleted() {
    axios.get(`/quizzes/${lessonID}/mark`).then((res) => {
      if (res?.data?.status) {
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }

      fetchLatestUserData();
    });
  }

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

      {quizzes?.length > 0 ? (
        <>
          {/* Question Card */}
          {quizzes?.map((quiz, key) => (
            <QuestionCard key={key} serialNumber={key + 1} question={quiz} />
          ))}

          {/* Mark as completed */}
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-outline-primary"
              onClick={markQuizAsCompleted}
            >
              Mark Quiz as Completed
            </button>
          </div>
        </>
      ) : (
        <h4 className="text-palatinateBlue fw-normal">Coming soon...</h4>
      )}
    </Layout>
  );
}

export default QuizPage;
