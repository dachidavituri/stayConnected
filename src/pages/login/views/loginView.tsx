import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";
import { Link } from "react-router-dom";
import logo from "@/assets/Frame 69.svg";
import Container from "@/components/ui/container";

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
          <form>
            <div className="flex flex-col gap-6">
              <div>
                <Input id="name" name="name" placeholder="User Name" />
              </div>
              <div>
                <Input id="password" name="password" placeholder="Password" />
              </div>
            </div>
            <Button className="w-full my-6">Login</Button>
            <div className="flex items-center gap-4 justify-center">
              <Heading level={3}>Don't have an account?</Heading>
              <Link className="text-blue-700 font-semibold" to="/register">
                Sign Up
              </Link>
            </div>
          </form>
        </Card>
      </section>
    </Container>
  );
};
export default LoginView;
