import { z } from "zod";

// Existing registration schema
export const registrationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  country: z.string().min(1, "Please select a country"),
  cohort: z.string().min(1, "Please select a cohort"),
  goals: z.string().optional(),
});

export type RegistrationData = z.infer<typeof registrationSchema>;

// New connect schema
export const connectSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  description: z.string().optional(), // Add the description field

  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
});

export type ConnectData = z.infer<typeof connectSchema>;
