import { z } from "zod";

const passwordSchema = z
  .string()
  .min(1, { message: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters long." })
  .regex(/[A-Z]/, {
    message: "Password  contain at least one uppercase letter.",
  })
  .regex(/[0-9]/, { message: "Password  contain at least one number." })
  .regex(/[\W_]/, {
    message: "Password  contain at least one special character.",
  });

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

export const regiserFormSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: "userName is required" })
      .min(3, { message: "userName must be at least 3 characters long" })
      .max(20, { message: "userName max length is 20" }),
    email: z.string().email(),
    password: passwordSchema,
    password2: z.string().min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.password2, {
    message: "Passwords do not match",
    path: ["password2"],
  });

export const answerFormSchema = z.object({
  answer: z
    .string()
    .min(1, { message: "Answer is required" })
    .min(15, { message: "Answer must be at least 15 characters long" }),
});

export const addQuetionSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .min(3, { message: "Title must be at least 4 characters long" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .min(25, { message: "Title must be at least 25 characters long" }),
  tag: z
    .array(z.string())
    .min(1, { message: "Please choose at least 1 framework" }),
});
