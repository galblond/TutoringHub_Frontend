import { Signer } from "crypto";
import SignIn from "../components/layout/auth/signIn/signIn";
import HomePage from "../pages/homePage/homePage";
import SignInPage from "../pages/signInPage/signInPage";

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
    exactPath: "/SignIn",
    component: SignInPage,
    isForSignedUsers: false,
  },
];

export default routes;
