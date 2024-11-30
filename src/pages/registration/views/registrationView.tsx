import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Heading from "@/components/ui/heading";
import logo from "@/assets/Frame 69.svg";
import { Link } from "react-router-dom";
import Container from "@/components/ui/container";

const RegistrationView: React.FC = () => {
  return (
    <Container>
      <section className="register w-full sm:w-[343px] md:w-[400px] flex flex-col gap-11 justify-center items-center m-auto">
        <div className="">
          <img className="w-28" src={logo} alt="" />
        </div>
        <Card>
          <div className="flex flex-col gap-3 mb-6 items-center justify-center">
            <Heading level={1}>Sign Up</Heading>
            <p className="text-gray-500 font-medium">
              Create you account and ask questions
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-6">
              <div>
                <Input id="name" name="name" placeholder="User Name" />
              </div>
              <div>
                <Input id="password" name="password" placeholder="Password" />
              </div>
              <div>
                <Input
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <Button className="w-full my-6">Register</Button>
            <div className="flex items-center gap-4 justify-center">
              <Heading level={3}>Already have an account?</Heading>
              <Link className="text-blue-700 font-semibold" to="/login">
                Sign In
              </Link>
            </div>
          </form>
        </Card>
      </section>
    </Container>
  );
};
export default RegistrationView;
