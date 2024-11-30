import Header from "@/components/header";
import Footer from "@/components/footer";
import { Outlet } from "react-router";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="py-8 flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;