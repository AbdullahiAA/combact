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
        status: "completed",
        objectives: [
          "The concept of Calculus.",
          "Why calculus is an important concept in mathematics.",
          "How calculus came to existence.",
        ],
        video: {
          url: "https://www.youtube.com/embed/UukVP7Mg3TU",
          time: "5 mins",
        },
        classDrill: [
          {
            id: 1,
            question: "Who invented Calculus?",
            a: "Pennie",
            b: "Rollins",
            c: "Dean",
            d: "Roman",
            correctAnswer: "a",
          },
          {
            id: 1,
            question: "How many branches of Calculus do we have?",
            a: "1",
            b: "2",
            c: "3",
            d: "4",
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
        id: 2,
        // title: "Branches of Calculus",
        title: "Average Rate of Change of a Function",
        status: "completed",
        objectives: [
          // "The branches of Calculus.",
          // "The differences between the branches of Calculus.",
          "The slope of a function",
          "The average rate of a function",
        ],
        video: {
          url: "https://www.youtube.com/embed/lQRiw264bnI",
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
        id: 3,
        // title: "Differentiation from the first principle",
        title: "Approximating the instantaneous Rate of Change of a Function",
        status: "pending",
        objectives: [
          "The steps involved in differentiating with the first principle.",
          "How to apply the first principle to differentiate any given function.",
        ],
        video: {
          url: "https://www.youtube.com/embed/jTvTthjtIrk",
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
        id: 4,
        // title: "Rules of differentiation (Differentiation of Polynomial)",
        title: "The limit of a function",
        status: "not started",
        objectives: [
          "The principal rule of differentiating a polynomial.",
          "How to apply the rule to differentiate any given polynomials.",
        ],
        video: {
          url: "https://www.youtube.com/embed/h_Rf_2OeSJU",
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
        id: 5,
        // title: "Rules of differentiation (Chain rule)",
        title: "Average rate of change of a function",
        status: "not started",
        objectives: [
          "When to apply the chain rule for differentiating functions.",
          "Differentiating functions using chain rule.",
        ],
        video: {
          url: "https://www.youtube.com/embed/YpYSEXAxMJ0",
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
        id: 6,
        // title: "Rules of differentiation (Product rule)",
        title:
          "Find the average rate of change of a function between two points",
        status: "not started",
        objectives: [
          "When to apply the product rule for differentiating functions.",
          "Differentiating functions using product rule.",
        ],
        video: {
          url: "https://www.youtube.com/embed/jqIoqECyY0A",
          time: "2 mins",
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
        id: 7,
        // title: "Rules of differentiation (Quotient rule)",
        title:
          "Find the average rate of change of a function over some interval",
        status: "not started",
        objectives: [
          "When to apply the quotient rule for differentiating functions.",
          "Differentiating functions using quotient rule.",
        ],
        video: {
          url: "https://www.youtube.com/embed/1Hoev0SIzjw",
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
        id: 8,
        // title: "Limits & Continuity",
        title: "The limit of a function basics",
        status: "not started",
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
        // title: "Limits & Continuity",
        title: "The laws of limits",
        status: "not started",
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
        // title: "Limits & Continuity",
        title: "Use the limit laws to find the limit of a line",
        status: "not started",
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
        // title: "Limits & Continuity",
        title: "What is a one sided limit",
        status: "not started",
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
        // title: "Limits & Continuity",
        title: "How to find the value of a one sided limit using the equation",
        status: "not started",
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
        // title: "Limits & Continuity",
        title: "Continuous functions",
        status: "not started",
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
        // title: "Limits & Continuity",
        title: "Limits involving infinity",
        status: "not started",
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
        status: "not started",
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
        status: "not started",
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
        status: "not started",
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
        status: "not started",
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
        status: "not started",
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
        status: "not started",
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
        status: "not started",
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
        status: "not started",
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
        status: "not started",
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
        status: "not started",
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
        status: "not started",
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
        status: "not started",
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
        status: "not started",
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
