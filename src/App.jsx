import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Dashboard, Login } from "@/layouts";
import React, { useEffect } from "react";

function App() {
  let navigate = useNavigate();

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/dashboard/home");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/auth/*"
        element={<Navigate to="/dashboard/home" replace />}
      />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
