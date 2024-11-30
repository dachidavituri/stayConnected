import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Heading from "@/components/ui/heading";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { loginFormSchema } from "@/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const LoginForm: React.FC = () => {
  type UserForm = z.infer<typeof loginFormSchema>;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { name: "", password: "" },
  });
  const onSubmit: SubmitHandler<UserForm> = (data) => {
    const result = loginFormSchema.safeParse(data);
    console.log(result);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <div>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input id="name" placeholder="User Name" {...field} />
            )}
          />
          {errors.name?.message && (
            <span className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
              {errors.name.message}
            </span>
          )}
        </div>
        <div>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input
                id="password"
                placeholder="Password"
                {...field}
                type="password"
              />
            )}
          />
          {errors.password?.message && (
            <span className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
              {errors.password.message}
            </span>
          )}
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
  );
};
export default LoginForm;
