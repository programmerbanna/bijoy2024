import { cookies } from "next/headers";

export default async function isLoggedIn() {
  let userInfo;
  try {
    if (!cookies().has("tokens")) return null;
    if (!cookies().has("userInfo")) return null;
    userInfo = cookies().get("userInfo")!.value;
  } catch (err) {
    console.error("JWT verification failed:", err);
    return null;
  }
  return userInfo;
}
