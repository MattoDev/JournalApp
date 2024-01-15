import { Navigate, Route, Routes } from "react-router-dom";
import { JournalApp } from "../../JournalApp";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalApp />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
