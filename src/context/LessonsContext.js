import { useState, useEffect, createContext, useContext } from "react";

const LessonsContext = createContext(null);

export function useLessons() {
  return useContext(LessonsContext);
}

export function LessonsProvider({ children }) {
  const [lessons, setLessons] = useState([]);

  function getLesson(lessonID) {
    return lessons.find((lesson) => lesson.id === parseInt(lessonID));
  }

  useEffect(() => {
    setLessons([
      {
        id: 1,
        title: "Introduction to Calculus",
        objectives: [
          "The concept of Calculus.",
          "What does calculus deals with.",
          "The three powerful tools of calculus: Limits, Derivatives and Integrals.",
          "How does these three tools relates to on another.",
        ],
        video: {
          url: "https://www.youtube.com/embed/UukVP7Mg3TU",
          time: "5 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "Calculus deals with _____",
            a: "Calculations",
            b: "Change",
            c: "Objects",
            d: "What we don't see",
            correctAnswer: "b",
          },
          {
            id: 2,
            question: "One of the following is not a tool used in calculus.",
            a: "Limits",
            b: "Power",
            c: "Derivatives",
            d: "Integrals",
            correctAnswer: "b",
          },
        ],
        quiz: [
          {
            id: 1,
            question: "Calculus deals with _____",
            a: "Calculations",
            b: "Change",
            c: "Objects",
            d: "What we don't see",
            correctAnswer: "b",
          },
          {
            id: 2,
            question: "One of the following is not a tool used in calculus.",
            a: "Limits",
            b: "Power",
            c: "Derivatives",
            d: "Integrals",
            correctAnswer: "b",
          },
          {
            id: 4,
            question: "Derivatives are built from _____.",
            a: "Limits",
            b: "Derivatives",
            c: "Integrals",
            d: "Surd",
            correctAnswer: "a",
          },
          {
            id: 3,
            question: "Integrals are seen as the inverse of _____.",
            a: "Limits",
            b: "Calculus",
            c: "Integrals",
            d: "Derivatives",
            correctAnswer: "d",
          },
        ],
      },
      {
        id: 2,
        title: "Average Rate of Change of a Function I",
        objectives: [
          "The average rate of a function",
          "How to get the slope of a function",
          "How function increases/decresases from one point to the other",
        ],
        video: {
          url: "https://www.youtube.com/embed/lQRiw264bnI",
          time: "5 mins",
        },
        classDrill: [
          {
            id: 1,
            question:
              "The slope of a function talks about _____ of that function.",
            a: "Behaviour",
            b: "Size",
            c: "Volume",
            d: "Power",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "The slope of a function talks about _____ of that function.",
            a: "Behaviour",
            b: "Size",
            c: "Volume",
            d: "Power",
            correctAnswer: "a",
          },
          {
            id: 2,
            question:
              "The higher the slope of a line, the higher the line increases.",
            a: "True",
            b: "False",
            c: "Maybe",
            d: "All of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 3,
        title: "Approximating the instantaneous Rate of Change of a Function",
        objectives: [
          "What the instantaneous Rate of Change of a Function really means.",
          "How to calculate the instantaneous Rate of Change of a Function.",
        ],
        video: {
          url: "https://www.youtube.com/embed/jTvTthjtIrk",
          time: "5 mins",
        },
        classDrill: [
          {
            id: 1,
            question:
              "Instantaneous rate of change describes the change _____.",
            a: "between three points",
            b: "between two points",
            c: "using only one point",
            d: "for any series of points",
            correctAnswer: "c",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Instantaneous rate of change describes the change _____.",
            a: "between three points",
            b: "between two points",
            c: "using only one point",
            d: "for any series of points",
            correctAnswer: "c",
          },
          {
            id: 2,
            question:
              "The instantaneous rate of change can be estimated by calculating the average change of series of points closer to the initial point.",
            a: "True",
            b: "False",
            c: "Maybe",
            d: "All of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 4,
        title: "The limit of a function",
        objectives: [
          "The behaviour of a function and what it is approaching.",
          "The significant of limit of a function as it approaches a point.",
        ],
        video: {
          url: "https://www.youtube.com/embed/h_Rf_2OeSJU",
          time: "5 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "The limit of f(x) = x + 2 as x approaches 4 is _____.",
            a: "2",
            b: "4",
            c: "6",
            d: "8",
            correctAnswer: "c",
          },
        ],
        quiz: [
          {
            id: 1,
            question: "The limit of f(x) = x + 2 as x approaches 4 is _____.",
            a: "2",
            b: "4",
            c: "6",
            d: "8",
            correctAnswer: "c",
          },
          {
            id: 2,
            question: "The limit of f(x) = x - 1 as x approaches 7 is _____.",
            a: "2",
            b: "4",
            c: "6",
            d: "8",
            correctAnswer: "c",
          },
        ],
      },
      {
        id: 5,
        title: "Average Rate of Change of a Function II",
        objectives: [
          "The basics to finding the average rate of change for a function, and the formulas involved.",
        ],
        video: {
          url: "https://www.youtube.com/embed/YpYSEXAxMJ0",
          time: "7 mins",
        },
        classDrill: [
          {
            id: 1,
            question:
              "The average rate of change of a function can be calculated by _____",
            a: "the distance",
            b: "the height",
            c: "the lenght",
            d: "the slope",
            correctAnswer: "d",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "The average rate of change of a function can be calculated by _____",
            a: "the distance",
            b: "the height",
            c: "the lenght",
            d: "the slope",
            correctAnswer: "d",
          },
        ],
      },
      {
        id: 6,
        title:
          "Find the average rate of change of a function between two points",
        objectives: [
          "How to find the average rate of change of a function, when given two x values",
        ],
        video: {
          url: "https://www.youtube.com/embed/jqIoqECyY0A",
          time: "2 mins",
        },
        classDrill: [
          {
            id: 1,
            question:
              "Find the average rate of change of f(x) from x = 1 to x = 3.<br /> &nbsp;&nbsp;&nbsp; f(x) = -x&sup3; + 2x -1",
            a: "11",
            b: "-11",
            c: "22",
            d: "-22",
            correctAnswer: "b",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Find the average rate of change of f(x) from x = 1 to x = 3.<br /> &nbsp;&nbsp;&nbsp; f(x) = -x&sup3; + 2x -1",
            a: "11",
            b: "-11",
            c: "22",
            d: "-22",
            correctAnswer: "b",
          },
        ],
      },
      {
        id: 7,
        title:
          "Find the average rate of change of a function over some interval",
        objectives: [
          "How to find the average rate of change of a function over some interval.",
        ],
        video: {
          url: "https://www.youtube.com/embed/1Hoev0SIzjw",
          time: "3 mins",
        },
        classDrill: [
          {
            question:
              "Find the average rate of change of f(x) on the interval [2. 3].<br /> &nbsp;&nbsp;&nbsp; f(x) = x&sup3; + 1",
            a: "19",
            b: "20",
            c: "21",
            d: "22",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Find the average rate of change of f(x) on the interval [2. 3].<br /> &nbsp;&nbsp;&nbsp; f(x) = x&sup3; + 1",
            a: "19",
            b: "20",
            c: "21",
            d: "22",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 8,
        title: "The limit of a function basics",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/vARHnOJ8fMg",
          time: "3 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 9,
        title: "The laws of limits",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/UiUBJxjnApQ",
          time: "10 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 10,
        title: "Use the limit laws to find the limit of a line",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/NVaV7o_SOrc",
          time: "3 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 11,
        title: "What is a one sided limit",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/OrkgkiaGMpM",
          time: "6 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 12,
        title: "How to find the value of a one sided limit using the equation",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/Rp4e_RySr0g",
          time: "9 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 13,
        title: "Continuous functions",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/InDHwh1CvOg",
          time: "9 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 14,
        title: "Limits involving infinity",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/X3l-q5CpSfE",
          time: "6 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 15,
        title: "How to find limits with infinity using the equation",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/tFHALKP22ao",
          time: "10 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 16,
        title: "Understanding the derivative of a function at a point",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/e-VC1flZg0I",
          time: "10 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 17,
        title: "Find the derivative of a function at a point",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/jkVumUaM2Oo",
          time: "20 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 18,
        title: "Understanding the derivative as a function",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/yB7Hb7mpvjU",
          time: "7 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 19,
        title: "Finding the derivative of a function using limits",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/Qjg0hMLrfOk",
          time: "5 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 20,
        title: "The basic rules for derivatives",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/rRphiUtRKcY",
          time: "10 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 21,
        title: "How to find the derivative of a function using the power rule",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/pBc4Udqw330",
          time: "6 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 22,
        title: "The product rule for derivatives",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/FBfXqorEad0",
          time: "10 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 23,
        title: "The quotient rule for derivatives",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/5fJY3fYgTbU",
          time: "9 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 24,
        title: "The chain rule for derivatives",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/Jf38DwIV6U4",
          time: "8 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 25,
        title: "Understanding the chain rule",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/CRXmjW5RSbU",
          time: "13 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 26,
        title: "Chain rule using Leibniz notation",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/Ur_kdKXnZPo",
          time: "9 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
      {
        id: 27,
        title: "Finding higher derivatives",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
        video: {
          url: "https://www.youtube.com/embed/jSRN0yxiD1o",
          time: "10 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "",
            a: "",
            b: "",
            c: "",
            d: "",
            correctAnswer: "a",
          },
        ],
        quiz: [
          {
            id: 1,
            question:
              "Calculus basically deals with the following except _____.",
            a: "limits",
            b: "derivatives",
            c: "integrals",
            d: "surd",
            correctAnswer: "a",
          },
          {
            id: 2,
            question: "The limit of a function at a point will give _____.",
            a: "a constant",
            b: "a variable",
            c: "a function",
            d: "all of the above",
            correctAnswer: "a",
          },
        ],
      },
    ]);
  }, []);
  return (
    <LessonsContext.Provider value={{ lessons, getLesson }}>
      {children}
    </LessonsContext.Provider>
  );
}
