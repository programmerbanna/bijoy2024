"use client";

/** Global import block
 * required packages
 * React | Next | Antd
 */
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

/* -------------------------------------------------------------------------- */
/*                                login module                                */
/* -------------------------------------------------------------------------- */
const Login = () => {
  /** hooks usage */
  const router = useRouter();

  /** Refresh page handler */
  const refreshPage = () => {
    router.push(process.env.NEXT_PUBLIC_AUTHORIZED_REDIRECT!); // Redirect to Google authentication
    router.refresh();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Next.js Developer Evaluation Task | Login
      </h1>
      {/* Login button */}
      <Button type="primary" onClick={refreshPage}>
        Login with Google
      </Button>
    </div>
  );
};

export default Login;
