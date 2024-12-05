import Card from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import logo from "@/assets/Frame 28.svg";
import Container from "@/components/ui/container";
import RegisterForm from "#/registration/components";
const RegistrationView: React.FC = () => {
  return (
    <Container>
      <section className="register w-full sm:w-[343px] md:w-[400px] flex flex-col gap-11 h-screen justify-center items-center m-auto">
        <div className="">
          <img className="w-28" src={logo} alt="" />
        </div>
        <Card>
          <div className="flex flex-col gap-3 mb-6 items-center justify-center">
            <Heading level={1}>Sign Up</Heading>
            <p className="text-gray-500 font-medium">
              Create your account and ask questions
            </p>
          </div>
          <RegisterForm />
        </Card>
      </section>
    </Container>
  );
};
export default RegistrationView;
