/** Global import block
 * required packages
 * Next | JsonWebToken | Google-Auth-Library
 */
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { OAuth2Client } from "google-auth-library";
const jwt = require("jsonwebtoken");

// Initialize the OAuth2 client with the necessary credentials and redirect URL
const oauth2Client = new OAuth2Client(
  process.env.NEXT_PUBLIC_CLIENT_ID,
  process.env.NEXT_PUBLIC_CLIENT_SECRET,
  `${process.env.NEXT_PUBLIC_URL}${process.env.NEXT_PUBLIC_AUTHORIZED_REDIRECT}`
);

export async function GET(request: any) {
  let code;
  let scope;

  // Extract authorization code and scope from the URL parameters if available
  if (request.nextUrl.searchParams) {
    code = request.nextUrl.searchParams.get("code");
    scope = request.nextUrl.searchParams.get("scope");
  }

  // If no authorization code is present, redirect the user to Google's OAuth2 consent page
  if (!code) {
    const authUrl = oauth2Client.generateAuthUrl({
      prompt: "consent", // Forces the user to consent and provide access
      access_type: "offline", // Ensures a refresh token is provided
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    });
    return Response.redirect(authUrl);
  }

  // Exchange the authorization code for access and refresh tokens
  const { tokens } = await oauth2Client.getToken(code);

  // Sign the tokens with JWT for secure storage in cookies
  const signedCookie = jwt.sign(tokens, process.env.NEXT_PUBLIC_COOKIE_SECRET, {
    expiresIn: "7d", // Tokens are valid for 7 days
  });

  // Set the signed tokens in a secure, HTTP-only cookie
  cookies().set({
    name: "tokens",
    value: signedCookie,
    httpOnly: true, // Prevents access to the cookie via JavaScript
    path: "/", // Makes the cookie available across the entire site
    secure: process.env.NODE_ENV === "production", // Ensures the cookie is only sent over HTTPS in production
    maxAge: 60 * 60 * 24 * 7, // Cookie expires in 7 days
  });

  // Decode the ID token to retrieve user information
  const userInfo = jwt.decode(tokens.id_token);

  // Store user information in a secure, HTTP-only cookie
  cookies().set({
    name: "userInfo",
    value: JSON.stringify(userInfo), // Store user info as a JSON string
    httpOnly: true, // Ensures the cookie is only accessible by the server
    path: "/", // Cookie is accessible site-wide
    secure: process.env.NODE_ENV === "production", // Send over HTTPS in production only
    maxAge: 60 * 60 * 24 * 7, // Cookie expires in 7 days
  });

  // Redirect the user to the home page after successfully setting the cookies
  return redirect("/");
}

export async function DELETE() {}
