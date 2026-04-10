import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { TalkWithUs } from "./pages/TalkWithUs";
import { Team } from "./pages/Team";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: Portfolio },
      { path: "portfolio/web-development", Component: Portfolio },
      { path: "portfolio/mobile-development", Component: Portfolio },
      { path: "portfolio/3d-animation", Component: Portfolio },
      { path: "portfolio/device-software", Component: Portfolio },
      { path: "team", Component: Team },
      { path: "talk-with-us", Component: TalkWithUs },
    ],
  },
]);
