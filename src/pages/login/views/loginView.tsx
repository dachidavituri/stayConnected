import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";
import logo from "@/assets/Frame 69.svg";
import Container from "@/components/ui/container";
import LoginForm from "#/login/components";
const LoginView: React.FC = () => {
  return (
    <Container>
      <section className="register sm:w-[343px] md:w-[400px] flex flex-col gap-11 justify-center items-center m-auto">
        <div className="">
          <img className="w-28" src={logo} alt="" />
        </div>
        <Card>
          <div className="flex flex-col gap-3 mb-6 justify-center items-center">
            <Heading level={1}>Login</Heading>
            <p className="text-gray-500 font-medium">Login and start</p>
          </div>
          {/* here */}
          <LoginForm />
        </Card>
      </section>
    </Container>
  );
};
export default LoginView;
