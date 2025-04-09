import { z } from "zod";

export const createUserSchema = z.object({
  fullName: z.string().min(5, "Name is required"),
  userName: z.string().min(5, "userName is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "Password must contain at least one number",
    })
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
      message: "Password must contain at least one special character",
    }),  email: z.string().email("Invalid email address"),
  role: z.enum(["reader", "writer", "shop"], {
    errorMap: () => ({ message: "Role is required" }),
  }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
