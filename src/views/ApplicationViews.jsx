import { Routes, Route, Outlet } from "react-router-dom";
import { Tasks } from "../components/Tasks";
import { Navbar } from "../components/Nav/Navbar";
import { CreateTasks } from "../components/forms/CreateTask";
import { EditTasks } from "../components/forms/EditTask";
import { Leaderboard } from "../components/Leaderboard";
import { CompletedTasks } from "../components/CompletedTasks";
import { useEffect, useState } from "react";


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({});
  
  
    useEffect(() => {
    const localLearningUser = localStorage.getItem("task_user");
    const learningUserObject = JSON.parse(localLearningUser);
    setCurrentUser(learningUserObject);
  }, []);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Tasks />} />
        {/* Add more routes here as needed */}
        <Route
          path="/CreateTasks"
          element={<CreateTasks currentUser={currentUser} />}
        />
        <Route
          path="/EditTasks"
          element={<EditTasks currentUser={currentUser} />}
        />
        <Route
          path="/EditTasks"
          element={<Leaderboard currentUser={currentUser} />}
        />
        <Route
          path="/CompletedTasks"
          element={<CompletedTasks currentUser={currentUser} />}
        />
      </Routes>
      <Navbar />
      <Outlet />
    </div>
  );
};
