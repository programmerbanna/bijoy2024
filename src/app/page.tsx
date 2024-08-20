/** Global import block
 * required packages
 *  Antd | JsonWebToken
 */
import { Alert } from "antd";
import Title from "antd/es/typography/Title";
const jwt = require("jsonwebtoken");

/** Custom import block
 * custom file based imports
 * custom component imports
 */
import Main from "@/modules/main";
import isLoggedIn from "@/app/(auth)/lib/isLoggedIn";

/* -------------------------------------------------------------------------- */
/*                                  home page                                 */
/* -------------------------------------------------------------------------- */
export default async function Home() {
  /* Check user login status */
  const loggedInResponse = await isLoggedIn();

  /* Decode user information if logged in */
  let userInfo;
  if (loggedInResponse) {
    userInfo = jwt.decode(loggedInResponse); // Decodes the JWT token
  }

  return (
    <>
      {userInfo ? (
        <Alert
          message={
            <Title level={2} className="text-center m-0">
              Hi, {userInfo?.name}
            </Title>
          }
          type="success"
          showIcon
          className="mb-4 w-full"
        />
      ) : (
        <Alert
          message="You are not logged in. Please log in!"
          type="warning"
          showIcon
          className="mb-4 w-full"
        />
      )}
      <Main />
    </>
  );
}
