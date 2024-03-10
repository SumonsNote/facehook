import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import PrivateRoutes from "./routes/PrivateRoutes";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProfilePage />} path="/me" />
        </Route>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegistrationPage />} path="/register" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}
