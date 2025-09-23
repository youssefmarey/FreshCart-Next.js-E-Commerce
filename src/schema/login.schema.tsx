import * as z from 'zod'

export const loginSchema = z.object({
    email: z.string("Email Is Required").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "Please enter a valid email address"),
    password: z.string("Password Is Required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ , "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"),
})

export type LoginInputType = z.infer<typeof loginSchema>;

