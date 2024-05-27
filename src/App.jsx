import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import AddNews from "./pages/add/news";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />

      <Route path="/auth/*" element={<Auth />} />
      <Route path="/dashboard/news/add" element={<AddNews />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
