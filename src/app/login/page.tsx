"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginInputType, loginSchema } from "@/schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();

  const form = useForm<LoginInputType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  async function handelRegister(values: LoginInputType) {
    // try {
    //   const { data } = await axios.post(
    //     "https://ecommerce.routemisr.com/api/v1/auth/signin",
    //     values
    //   );

    //   toast.success(data.message, {
    //     position: "top-center",
    //   });

    //   router.push("/");
    // } catch (error) {
    //   toast.error(error.response.data.message, {
    //     position: "top-center",
    //   });
    // }

    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    });

    if (res?.ok) {
      toast.success("Login Success", {
        position: "top-center",
        duration: 1000,
      });

      window.location.href = res.url || "/";
    } else {
      toast.error(res?.error, {
        position: "top-center",
        duration: 1000,
      });
    }
  }

  return (
    <div className="p-5 md:p-0 w-full md:w-1/2 my-12  mx-auto">
      <h1 className="text-2xl text-center font-bold my-10">Login Form</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handelRegister)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full mt-5" variant="default">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
