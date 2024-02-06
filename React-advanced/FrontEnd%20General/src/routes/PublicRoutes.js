import React from "react";
import Forbidden from "../views/Forbidden/Forbidden";
import ForgotPassword from "../views/ForgotPassword/ForgotPassword";
import InternalServerError from "../views/InternalServerError/InternalServerError";
import LockScreen from "../views/LockScreen/LockScreen";
import NotFound from "../views/NotFound/NotFound";
import ServiceUnavailable from "../views/ServiceUnavailable/ServiceUnavailable";
import Signin from "../views/Signin/Signin";
import Signin2 from "../views/Signin2/Signin2";
import Signup from "../views/Signup/Signup";
import Signup2 from "../views/Signup2/Signup2";
import VerifyAccount from "../views/VerifyAccount/VerifyAccount";

const publicRoutes = [
  { path: "pages/signin", element: <Signin /> },
  { path: "pages/signin2", element: <Signin2 /> },
  { path: "pages/signup", element: <Signup /> },
  { path: "pages/signup2", element: <Signup2 /> },
  { path: "pages/verify", element: <VerifyAccount /> },
  { path: "pages/forgot", element: <ForgotPassword /> },
  { path: "pages/lock", element: <LockScreen /> },
  { path: "pages/error-404", element: <NotFound /> },
  { path: "pages/error-500", element: <InternalServerError /> },
  { path: "pages/error-503", element: <ServiceUnavailable /> },
  { path: "pages/error-505", element: <Forbidden /> }
];

export default publicRoutes;