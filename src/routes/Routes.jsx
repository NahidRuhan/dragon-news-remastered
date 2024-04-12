import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/home/Home";
import NewsDetail from "../components/home/NewsDetail";

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
            path: "/news/:id",
            element: <NewsDetail></NewsDetail>,
            loader: ()=> fetch('/news.json')
        }
      ]
    },
  ]);

  export default router;