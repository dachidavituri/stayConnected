import QuestionItem from "../components/questions";
import RatingItem from "../components/raitings";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";

const QUESTIONITEM_DYMMY_DATA = [
    {
        title: "1 What is Jotai?",
        author: "Tinatin Gordadze",
        date: "12.12.2024",
        question:
          " Jotai i simple and fast state management library for Nex It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are   derived state that can be created using the selector function.",
        badges: ["react", "Jotai", "Development", "next"],
        link: "/question/1",
        answers: 12,
      },
      {
        title: "2 What is Jotai?",
        author: "Tinatin Gordadze",
        date: "12.12.2024",
        question:
          " Jotai i simple and fast state management library for Nex It is based on the idea of atoms and selectors. Atoms are the smallest units of state that can be created using the atom function. Selectors are   derived state that can be created using the selector function.",
        badges: ["react", "Jotai", "Development", "next"],
        link: "/question/1",
        answers: 12,
      }
];

const RATINGS_DAMMY_DATA = [
    { name: "1Tiko Gordadze", rating: 32 },
    { name: "2 Tiko Gordadze", rating: 2 },
    { name: "3 Tiko Gordadze", rating:62 }
];

const HomeView: React.FC = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col xl:flex-row gap-6 items-start ">
        <div className=" w-full xl:w-[30%]">
            <Card className="flex flex-col gap-6">
            <Heading level={1}>Ratig of users</Heading>
              {RATINGS_DAMMY_DATA.map((data, index) =>{
                return    <RatingItem key={index} {...data} />
             
              })}
            </Card>
          </div>
          <div className="flex flex-col gap-6 w-full xl:w-[70%] ">
         
             {QUESTIONITEM_DYMMY_DATA.map((data, index) =>{
                 return  <QuestionItem key={index} {...data} />
                
             })}
          </div>
       
        </div>
      </Container>
    </section>
  );
};

export default HomeView;
