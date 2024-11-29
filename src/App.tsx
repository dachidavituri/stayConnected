import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import RegistrationView from "#/registration/views";
import LoginView from "#/login/views";
import NotFoundView from "&/notFound";
import QuestionsView from "#/questions/views";
import AuthRegisterGuard from "&/guard/authGuard";
import ProfileGuard from "&/guard/profileGuard";
const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              <AuthRegisterGuard>
                <LoginView />
              </AuthRegisterGuard>
            }
          ></Route>
          <Route
            path="register"
            element={
              <AuthRegisterGuard>
                <RegistrationView />
              </AuthRegisterGuard>
            }
          ></Route>
          <Route
            path="questions"
            element={
              <ProfileGuard>
                <QuestionsView />
              </ProfileGuard>
            }
          />
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
