import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../Home";

export const ApplicationViews = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Outlet />
    </div>
  );
};
