import { Signer } from "crypto";
import SignIn from "../components/layout/auth/signIn/signIn";
import HomePage from "../pages/homePage/homePage";
import SignInPage from "../pages/signInPage/signInPage";
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
    exactPath: "/SignIn",
    component: SignInPage,
    isForSignedUsers: false,
  },
  {
    exactPath: "/teacherManagement",
    component: TeacherManagementPage,
    isForSignedUsers: false, // TODO change to true when sign in process is working
  }
];

export default routes;
