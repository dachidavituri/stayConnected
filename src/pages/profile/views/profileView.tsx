import React, { useRef } from "react";
import Profile from "../components/profile";
import Container from "@/components/ui/container";
import QuestionItem from "@/pages/home/components/questions";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { useVirtualizer } from "@tanstack/react-virtual";

const QUESTIONITEM_DYMMY_DATA = [
  {
    title: "1 What is Jotai?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question: "Jotai is a simple and fast state management library.",
    badges: ["react", "Jotai", "Development", "next"],
    link: "/questions/1",
    answers: 12,
  },
  {
    title: "1 What is Jotai?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question: "Jotai is a simple and fast state management library.",
    badges: ["react", "Jotai", "Development", "next"],
    link: "/questions/1",
    answers: 12,
  },
  {
    title: "1 What is Jotai?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question: "Jotai is a simple and fast state management library.",
    badges: ["react", "Jotai", "Development", "next"],
    link: "/questions/1",
    answers: 12,
  },
];

const LIKED_QUESTIONITEM_DYMMY_DATA = [
  {
    title: "22 What is Jotai?",
    author: "Tinatin Gordadze",
    date: "12.12.2024",
    question: "Jotai is a simple and fast state management library.",
    badges: ["react", "Jotai", "Development", "next"],
    link: "/questions/22",
    answers: 12,
  },
];

const ProfileView: React.FC = () => {
  const parentRefAskedQuestions = useRef<HTMLDivElement>(null);
  const parentRefLikedQuestions = useRef<HTMLDivElement>(null);

  const askedQuestionsVirtual = useVirtualizer({
    count: QUESTIONITEM_DYMMY_DATA.length,
    getScrollElement: () => parentRefAskedQuestions.current,
    estimateSize: () => 200,
    measureElement: (el) => el.getBoundingClientRect().height + 16,
  });

  const likedQuestionsVirtual = useVirtualizer({
    count: LIKED_QUESTIONITEM_DYMMY_DATA.length,
    getScrollElement: () => parentRefLikedQuestions.current,
    estimateSize: () => 200,
    measureElement: (el) => el.getBoundingClientRect().height + 16,
  });

  return (
    <section>
      <Container>
        <Profile />

        <div className="mt-4">
          <Tabs defaultValue="askedQuestions" className="w-full">
            <TabsList className="flex">
              <TabsTrigger
                className="flex-1 text-center font-semibold"
                value="askedQuestions"
              >
                Asked Questions
              </TabsTrigger>
              <TabsTrigger
                className="flex-1 text-center font-semibold"
                value="likedQuestions"
              >
                Liked Questions
              </TabsTrigger>
            </TabsList>

            {/* Asked Questions Tab */}
            <TabsContent value="askedQuestions">
              <div
                ref={parentRefAskedQuestions}
                className="h-[400px] overflow-auto border rounded scroll-hidden"
              >
                <div
                  style={{
                    height: `${askedQuestionsVirtual.getTotalSize()}px`,
                    position: "relative",
                  }}
                >
                  {askedQuestionsVirtual.getVirtualItems().map((virtualRow) => {
                    const data = QUESTIONITEM_DYMMY_DATA[virtualRow.index];
                    return (
                      <div
                        key={virtualRow.index}
                        data-index={virtualRow.index}
                        className="absolute top-0 left-0 w-full"
                        style={{
                          transform: `translateY(${virtualRow.start}px)`,
                        }}
                        ref={askedQuestionsVirtual.measureElement}
                      >
                        <Link to={data.link}>
                          <QuestionItem
                            id={0}
                            description={""}
                            createdAt={""}
                            tags={[]}
                            {...data}
                          />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
            {/* Liked Questions Tab */}
            <TabsContent value="likedQuestions">
              <div
                ref={parentRefLikedQuestions}
                className="h-[400px] overflow-auto border rounded scroll-hidden"
              >
                <div
                  style={{
                    height: `${likedQuestionsVirtual.getTotalSize()}px`,
                    position: "relative",
                  }}
                >
                  {likedQuestionsVirtual.getVirtualItems().map((virtualRow) => {
                    const data =
                      LIKED_QUESTIONITEM_DYMMY_DATA[virtualRow.index];
                    return (
                      <div
                        key={virtualRow.index}
                        data-index={virtualRow.index}
                        className="absolute top-0 left-0 w-full"
                        style={{
                          transform: `translateY(${virtualRow.start}px)`,
                        }}
                        ref={likedQuestionsVirtual.measureElement}
                      >
                        <Link to={data.link}>
                          <QuestionItem
                            id={0}
                            description={""}
                            createdAt={""}
                            tags={[]}
                            {...data}
                          />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default ProfileView;
