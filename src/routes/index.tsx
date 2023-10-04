import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../components/authentication/signup/Signup";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export { routes };
