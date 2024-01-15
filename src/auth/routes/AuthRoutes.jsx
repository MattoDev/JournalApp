import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

// AuthRoutes es un functional component hay que investigar el concepto
export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      {/* El /* es para indicar cualquier otra ruta */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
