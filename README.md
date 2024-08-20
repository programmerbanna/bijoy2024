# Next.js Developer Evaluation Task

## Overview

This project is a Next.js application demonstrating authentication, form handling, and user management using various libraries and custom components. The application includes Google OAuth2 authentication, user login, and a form for user signup with validation.

## Project Structure

- **`app/(auth)/login`**: Contains the login page with Google OAuth2 integration.
- **`app/api/auth/google/route.ts`**: Handles Google OAuth2 authentication and token management.
- **`app/(auth)/sign-up`**: Provides a signup form with validation.
- **`hooks/useFetch.ts`**: Custom hook for fetching data with optional pagination and limits.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **jsonwebtoken**: A library for creating and verifying JSON Web Tokens.
- **yup**: A schema validation library for JavaScript.
- **formik**: A library for managing form state and validation in React.
- **google-auth-library**: A client library for Google OAuth2 authentication.
- **Ant Design**: A UI component library for React, providing a set of high-quality components.

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/programmerbanna/bijoy2024.git
   cd bijoy2024
   ```

2. **Install Dependencies**
   ```
   npm install
   ```
3. **Run the Development Server**
   ```
   npm run dev
   ```
