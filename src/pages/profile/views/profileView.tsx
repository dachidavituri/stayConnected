import Profile from "../components/profile";
import Container from "@/components/ui/container";
import QuestionItem from "@/pages/home/components/questions";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router";

const QUESTIONITEM_DYMMY_DATA = [
  {
    title: "1 What is Jotai?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question:
      " Jotai i simple and fast state management library for Nex It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are   derived state that can be created using the selector function.",
    badges: ["react", "Jotai", "Development", "next"],
    link: "/questions/1",
    answers: 12,
  },
  {
    title: "2 What is Jotai?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question:
      " Jotai i simple and fast state management library for Nex It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are   derived state that can be created using the selector function.",
    badges: ["react", "Jotai", "Development", "next"],
    answers: 12,
  },
];
const LIKED_QUESTIONITEM_DYMMY_DATA = [
  {
    title: "22 What is Jotai?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question:
      " Jotai i simple and fast state management library for Nex It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are   derived state that can be created using the selector function.",
    badges: ["react", "Jotai", "Development", "next"],
    link: "/questions/1",
    answers: 12,
  },
  {
    title: "44 What is Jotai?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question:
      " Jotai i simple and fast state management library for Nex It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are   derived state that can be created using the selector function.",
    badges: ["react", "Jotai", "Development", "next"],
    answers: 12,
  },
];

const ProfileView: React.FC = () => {
  return (
    <section>
      <Container>
        <Profile />

        <div className="">
          <Tabs defaultValue="askedQuestions" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="askedQuestions">
                Asked Questions
              </TabsTrigger>
              <TabsTrigger className="w-full" value="likedQuestions">
                Liked Questions
              </TabsTrigger>
            </TabsList>
            {/*  tab content */}
            <TabsContent value="askedQuestions">
              {QUESTIONITEM_DYMMY_DATA.map((data, index) => {
                return (
                  <Link to="/" key={index}>
                    <QuestionItem {...data} />
                  </Link>
                );
              })}
            </TabsContent>
            <TabsContent value="likedQuestions">
              {LIKED_QUESTIONITEM_DYMMY_DATA.map((data, index) => {
                return (
                  <Link to="/" key={index}>
                    <QuestionItem {...data} />
                  </Link>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default ProfileView;
