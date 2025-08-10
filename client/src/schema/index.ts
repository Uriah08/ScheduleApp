import { z } from "zod"

export const loginSchema = z.object({
  username: z.string().min(5).max(50),
  password: z.string().min(5).max(50)
})

export const registerSchema = z.object({
  username: z.string().min(5).max(50),
  password: z.string().min(5).max(50),
  confirmPassword: z.string().min(5).max(50),
  email: z.email().min(5),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().min(5).max(13)
})