import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import RegistrationView from "#/registration/views";
import HomeView from "#/home/views";
import LoginViews from "#/login/views";
import NotFoundView from "&/notFound";
import AskQuestionsView from "#/questions/views";
// import AuthRegisterGuard from "&/guard/authGuard";
// import ProfileGuard from "&/guard/profileGuard";
import DefaultLayout from "@/layouts";
import SingleQuestionView from "#/singleQuestion/views";
const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route
          path="login"
          element={
            // <AuthRegisterGuard>
            <LoginViews />
            // </AuthRegisterGuard>
          }
        ></Route>
        <Route
          path="register"
          element={
            // <AuthRegisterGuard>
            <RegistrationView />
            // </AuthRegisterGuard>
          }
        ></Route>
        <Route path="/" element={<DefaultLayout />}>
          <Route
            path="questions"
            element={
              // <ProfileGuard>
              <AskQuestionsView />
              // </ProfileGuard>
            }
          />
          <Route path="home" element={<HomeView />} />
          <Route path="questions/:id" element={<SingleQuestionView />} />
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
