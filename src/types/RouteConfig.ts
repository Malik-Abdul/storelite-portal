import type { ReactElement } from "react";

export interface RouteItem {
  id: number;
  path: string;
  element: ReactElement;
  child?: RouteItem[];
}
