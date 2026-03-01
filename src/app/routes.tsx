import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { TalkWithUs } from "./pages/TalkWithUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: Portfolio },
      { path: "talk-with-us", Component: TalkWithUs },
    ],
  },
]);
