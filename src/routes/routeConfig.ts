// routes/routeConfig.ts
import Home from "../pages/Home";
// import About from "../pages/About";

import type { RouteItem } from "../types/RouteConfig";
import React from "react";
export const routes: RouteItem[] = [
  { id: 1, path: "/", element: React.createElement(Home) },
];
