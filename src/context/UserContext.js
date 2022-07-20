import { createContext, useContext, useState } from "react";
import axios from "../components/axios/axios";

// User Context
const UserContext = createContext(null);

// User Context hook
export function useUserContext() {
  return useContext(UserContext);
}

// User Context Provider
export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({});

  function updateUserData(data) {
    setUserData(data);
  }

  function fetchLatestUserData() {
    axios.get("/student").then((res) => {
      if (res.data?.status) {
        setUserData(res.data);

        saveToken(res?.data?.token);
      }
    });
  }

  function saveToken(token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  return (
    <UserContext.Provider
      value={{ userData, updateUserData, fetchLatestUserData, saveToken }}
    >
      {children}
    </UserContext.Provider>
  );
}
