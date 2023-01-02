import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello</h1>,
  },
  {
    path: "/demo",
    element: <h1>Demo</h1>,
  },
]);
export default router;
