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
/*                                 home module                                */
/* -------------------------------------------------------------------------- */
export default async function Home() {
  const loggedInResponse = await isLoggedIn();

  let userInfo;
  if (loggedInResponse) {
    userInfo = jwt.decode(loggedInResponse);
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
