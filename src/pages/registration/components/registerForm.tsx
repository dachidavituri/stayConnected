import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Heading from "@/components/ui/heading";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { regiserFormSchema } from "@/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const RegisterForm: React.FC = () => {
  type RegisterForm = z.infer<typeof regiserFormSchema>;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(regiserFormSchema),
    defaultValues: { name: "", password: "", confirmPassword: "" },
  });
  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    const result = regiserFormSchema.safeParse(data);
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
        <div>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <Input
                id="confirmPassword"
                placeholder="Confirm Password"
                {...field}
                type="password"
              />
            )}
          />
          {errors.confirmPassword?.message && (
            <span className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
              {errors.confirmPassword.message}
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
