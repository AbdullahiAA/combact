import React, { useState, useEffect } from "react";
import "./LessonPage.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";

import vid01 from "../../assets/videos/lesson01.mp4";

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
      <div className="card">
        <div className="card-header position-relative">
          <h2 className="h3 mb-0 d-flex align-items-center">
            Learning Objectives
          </h2>
        </div>
        <div className="card-body">
          <h3 className="h5 fw-normal text-dark">
            At the end of this lesson, you would have been exposed to:
          </h3>
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

      <div className="card">
        <div className="card-header position-relative">
          <p className="mb-0 d-flex align-items-center">
            Enjoy this lesson buddy!
          </p>
        </div>
        <div className="card-body">
          <div className="videoWrapper">
            <iframe
              src={vid01}
              title={lesson?.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LessonPage;
