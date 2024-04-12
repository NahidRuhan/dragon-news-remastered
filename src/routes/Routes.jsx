import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/home/Home";
import NewsDetail from "../components/home/NewsDetail";
import Other from "../components/Other";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('/news.json')
        },
        {
            path: "/about",
            element: <Other></Other>,
        },
        {
            path: "/career",
            element: <Other></Other>,
        },
        {
            path: "/news/:id",
            element: <NewsDetail></NewsDetail>,
            loader: ()=> fetch('/news.json')
        }
      ]
    },
  ]);

  export default router;