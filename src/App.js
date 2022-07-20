import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Lessons from "./pages/Lessons/Lessons";
import OtherResources from "./pages/OtherResources/OtherResources";
import Profile from "./pages/Profile/Profile";
import Quizzes from "./pages/Quizzes/Quizzes";
import Settings from "./pages/Settings/Settings";
import About from "./pages/About/About";
import LessonPage from "./pages/Lessons/LessonPage";
import Certificate from "./pages/Certificate/Certificate";
import ScrollToTop from "./components/global/ScrollToTop";
import QuizPage from "./pages/Quizzes/QuizPage";
import { LessonsProvider } from "./context/LessonsContext";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <LessonsProvider>
          <ScrollToTop />
          <Toaster
            toastOptions={{
              success: {
                position: "top-right",
                style: {
                  background: "#28a745",
                  color: "#fff",
                },
                iconTheme: {
                  primary: "#fff",
                  secondary: "#28a745",
                },
              },
              error: {
                style: {
                  background: "#ff7676",
                  color: "#fff",
                },
                iconTheme: {
                  primary: "#fff",
                  secondary: "#ff7676",
                },
              },
            }}
          />
          <div className="app">
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/lessons/:lessonID" element={<LessonPage />} />
              <Route path="/other-resources" element={<OtherResources />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/quizzes/:lessonID" element={<QuizPage />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </LessonsProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
