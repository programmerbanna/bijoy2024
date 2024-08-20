"use client";

/** Global import block
 * required packages
 * React | Next | Antd
 */
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                login module                                */
/* -------------------------------------------------------------------------- */
const Login = () => {
  /* State to manage loading state */
  const [loading, setLoading] = useState<boolean>(false);

  /* hooks usage */
  const router = useRouter(); // Using the useRouter hook for navigation

  /* Refresh page handler */
  const refreshPage = async () => {
    setLoading(true); // Set loading to true when the button is clicked
    try {
      // Redirect to Google authentication
      router.push(process.env.NEXT_PUBLIC_AUTHORIZED_REDIRECT!);
      // Refresh the page
      router.refresh();
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false); // Set loading to false after the operation completes
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome to Next.js Developer Evaluation Task | Login
      </h1>
      {/* Login button with loading behavior */}
      <Button
        type="primary"
        onClick={refreshPage}
        loading={loading} // Show loading spinner if loading is true
      >
        Login with Google
      </Button>
    </div>
  );
};

export default Login;
