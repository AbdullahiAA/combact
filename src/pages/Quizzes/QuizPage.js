import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import QuestionCard from "../../components/Lessons/QuestionCard";
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
        <QuestionCard key={key} serialNumber={key + 1} question={quiz} />
      ))}
    </Layout>
  );
}

export default QuizPage;
