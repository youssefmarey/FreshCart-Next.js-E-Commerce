import * as z from 'zod'

export const registerSchema = z.object({
    name: z.string("Name Is Required").min(3 , "Min Lenght 3 ").max(20 , "Max Lenght 20"),
    email: z.string("Email Is Required").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "Please enter a valid email address"),
    password: z.string("Password Is Required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ , "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"),
    rePassword:z.string("Password Is Required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ , "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"),
    phone: z.string("Phone Is Required").regex(/^(010|011|012|015)[0-9]{8}$/ , "Please enter a valid Egyptian phone number (11 digits starting with 010, 011, 012, or 015)"),
}).refine(function(object) {
    if(object.password === object.rePassword){
        return true
    }

    return false
}, {
    path:["rePassword"],
    error:"Passwords Do Not Match"
})

export type RegisterInputType = z.infer<typeof registerSchema>;

