import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import RegistrationView from "#/registration/views";
import LoginForm from "#/login/views";
import NotFoundView from "&/notFound";
import QuestionsView from "#/questions/views";
import AuthRegisterGuard from "&/guard/authGuard";
import ProfileGuard from "&/guard/profileGuard";
import DefaultLayout from "./layouts";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              <AuthRegisterGuard>
                <LoginForm />
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
          <Route path="/" element={<DefaultLayout />}>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
