import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Category from "../../Category/Category";
import News from "../../News/News";
import Home from "../../Home/Home";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import TermsAndCondition from "../../Terms&Condition/Terms&Condition";
import Profile from "../../Profile/Profile";

const baseUrl = "https://news-portal-three-beta.vercel.app";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${baseUrl}/news`),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) => fetch(`${baseUrl}/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoutes>
            <News />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`${baseUrl}/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndCondition></TermsAndCondition>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
