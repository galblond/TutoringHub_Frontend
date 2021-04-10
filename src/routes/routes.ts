import { Signer } from "crypto";
import SignIn from "../components/layout/auth/register/register";
import TabsMenu from "../components/layout/tabsMenu/tabsMenu";
import HomePage from "../pages/homePage/homePage";
import RegisterPage from "../pages/registerPage/registerPage";

interface AppRoute {
  exactPath: string;
  component: React.FC<any>;
  isForSignedUsers?: boolean;
  isRouteInMainDrawer?: boolean;
  text?: string;
}

const routes: AppRoute[] = [
  {
    exactPath: "/",
    component: HomePage,
    isForSignedUsers: false,
  },
  {
    exactPath: "/register",
    component: RegisterPage,
    isForSignedUsers: false,
  },
  {
    exactPath: "/tabsMenu",
    component: TabsMenu,
    isForSignedUsers: true, // TODO change to true when sign in process is working
  },
];

export default routes;
