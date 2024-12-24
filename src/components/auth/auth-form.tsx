/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { checkEmail, login, signUp } from "@/action/auth-actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type FormValues = {
  email: string;
  password: string;
  confirmPassword?: string;
};

const AuthForm = () => {
    const router = useRouter();
  const [emailChecked, setEmailChecked] = useState<boolean>(false);
  const [userExists, setUserExists] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormValues>();

  const handleAuth = async (authInfo: FormValues, isLogin: boolean) => {
    try {
      setIsLoading(true);
      const result = await (isLogin ? login(authInfo) : signUp(authInfo));
      console.log(result);
      if (result?.success) {
        toast.success(result.message, { className: "bg-green-500 text-white" });
        router.push( '/');
      } else {
        toast.error(result?.message, { className: "bg-red-500 text-white" });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!", { className: "bg-red-500 text-white" });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!emailChecked) {
      try {
        const exists = await checkEmail(data.email);
        console.log(exists);
        setUserExists(exists);
        setEmailChecked(true);
      } catch (err) {
        console.error(err);
        toast.error("Error checking email", { className: "bg-red-500 text-white" });
      }
    } else {
      await handleAuth(data, userExists);
    }
  };

  return (
    <div className="md:pt-[200px] pt-[100px] flex flex-col w-full ">
      <div className="p-0">
        <div className="flex flex-col items-center w-full">
          <h2 className="mb-4 w-full text-lg font-semibold md:mb-5 md:text-[21px]">
            {emailChecked
              ? userExists
                ? "Login"
                : "Sign Up"
              : "Proceed with mobile number/email"}
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[372px]  w-full mr-auto space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Mobile number/Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Mobile number/Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            {emailChecked && (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            )}
            {emailChecked && !userExists && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            )}
            <Button disabled={isLoading} type="submit" className="w-full">
              {emailChecked ? (userExists ? "Login" : "Sign Up") : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;


