import HomePage from "../pages/homePage/homePage";

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
];

export default routes;
