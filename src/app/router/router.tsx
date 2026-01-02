import { Home } from "../../pages/home";
import { UsersPage } from "../../pages/usersPage";

export interface IRoute {
  path: string;
  component: () => JSX.Element | null;
}

export const routes: IRoute[] = [
  {
    path: "/",
    component: () => <Home />,
  },
  {
    path: "/dashboard",
    component: () => <UsersPage />,
  },
];
