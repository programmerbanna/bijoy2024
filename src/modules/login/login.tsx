"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();

  const refreshPage = () => {
    router.push("/api/auth/google");
    router.refresh();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Next.js Developer Evaluation Task | Login
      </h1>

      <Button type="primary" onClick={refreshPage}>
        Login with google
      </Button>
      <div className="w-full max-w-4xl mt-8"></div>
    </div>
  );
};

export default Login;
