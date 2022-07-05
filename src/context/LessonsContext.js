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
        duration: "20 mins",
        status: "completed",
        objectives: [
          "The concept of Calculus.",
          "Why calculus is an important concept in mathematics.",
          "How calculus came to existence.",
        ],
      },
      {
        id: 2,
        title: "Branches of Calculus",
        duration: "20 mins",
        status: "completed",
        objectives: [
          "The branches of Calculus.",
          "The differences between the branches of Calculus.",
        ],
      },
      {
        id: 3,
        title: "Differentiation from the first principle",
        duration: "20 mins",
        status: "pending",
        objectives: [
          "The steps involved in differentiating with the first principle.",
          "How to apply the first principle to differentiate any given function.",
        ],
      },
      {
        id: 4,
        title: "Rules of differentiation (Differentiation of Polynomial)",
        duration: "20 mins",
        status: "not started",
        objectives: [
          "The principal rule of differentiating a polynomial.",
          "How to apply the rule to differentiate any given polynomials.",
        ],
      },
      {
        id: 5,
        title: "Rules of differentiation (Chain rule)",
        duration: "20 mins",
        status: "not started",
        objectives: [
          "When to apply the chain rule for differentiating functions.",
          "Differentiating functions using chain rule.",
        ],
      },
      {
        id: 6,
        title: "Rules of differentiation (Product rule)",
        duration: "20 mins",
        status: "not started",
        objectives: [
          "When to apply the product rule for differentiating functions.",
          "Differentiating functions using product rule.",
        ],
      },
      {
        id: 7,
        title: "Rules of differentiation (Quotient rule)",
        duration: "20 mins",
        status: "not started",
        objectives: [
          "When to apply the quotient rule for differentiating functions.",
          "Differentiating functions using quotient rule.",
        ],
      },
      {
        id: 8,
        title: "Limits & Continuity",
        duration: "20 mins",
        status: "not started",
        objectives: [
          "What limits and continuity is all about.",
          "How to find limit of a function as it tends to a particular point.",
          "When a function is said to be continuous.",
        ],
      },
    ]);
  }, []);
  return (
    <LessonsContext.Provider value={{ lessons: lessons, getLesson: getLesson }}>
      {children}
    </LessonsContext.Provider>
  );
}
