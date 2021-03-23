import { Signer } from "crypto";
import SignIn from "../components/layout/auth/register/register";
import TabsMenu from "../components/layout/tabsMenu/tabsMenu";
import HomePage from "../pages/homePage/homePage";
import RegisterPage from "../pages/registerPage/registerPage";
import SignInPage from "../pages/registerPage/registerPage";
import TeacherManagementPage from "../pages/teacherManagementPage/teacherManagementPage";

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
    exactPath: "/Register",
    component: RegisterPage,
    isForSignedUsers: false,
  },
  {
    exactPath: "/teacherManagement",
    component: TeacherManagementPage,
    isForSignedUsers: false, // TODO change to true when sign in process is working
  },
  {
    exactPath: "/tabsMenu",
    component: TabsMenu,
    isForSignedUsers: false, // TODO change to true when sign in process is working
  },
];

export default routes;
