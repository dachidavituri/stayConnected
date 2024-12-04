import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Heading from "@/components/ui/heading";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { regiserFormSchema } from "@/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUp } from "@/react-query/mutation/auth";
const RegisterForm: React.FC = () => {
  type RegisterForm = z.infer<typeof regiserFormSchema>;
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(regiserFormSchema),
    defaultValues: { username: "", email: "", password: "", password2: "" },
  });
  const { mutate: handleSignUp } = useSignUp();
  const onSubmit: SubmitHandler<RegisterForm> = (data: RegisterForm) => {
    handleSignUp(
      { payload: data },
      {
        onSuccess: () => navigate("/login"),
      },
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div>
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <Input id="name" placeholder="User Name" {...field} />
            )}
          />
          {errors.username?.message && (
            <span className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
              {errors.username.message}
            </span>
          )}
        </div>
        <div>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input id="email" placeholder="Email" {...field} />
            )}
          />
          {errors.email?.message && (
            <span className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input id="password" placeholder="Password" {...field} type="password"/>
            )}
          />
          {errors.password?.message && (
            <span className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
              {errors.password.message}
            </span>
          )}
        </div>
        <div>
          <Controller
            control={control}
            name="password2"
            render={({ field }) => (
              <Input id="password2" placeholder="Confirm Password" {...field} type="password"/>
            )}
          />
          {errors.password2?.message && (
            <span className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
              {errors.password2.message}
            </span>
          )}
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
  );
};
export default RegisterForm;
