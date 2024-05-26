import {
  HomeIcon,
  ServerStackIcon,
  RectangleStackIcon,
  NewspaperIcon,
  BuildingLibraryIcon,
  ListBulletIcon,
  PhotoIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import { Home } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import NewsPage from "./pages/dashboard/news";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Домашняя страница",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <NewspaperIcon {...icon} />,
        name: "Новости",
        path: "/news",
        element: <NewsPage />,
      },
      {
        icon: <BuildingLibraryIcon {...icon} />,
        name: "Администрация школы",
        path: "/admins",
        element: <Home />,
      },
      {
        icon: <ListBulletIcon {...icon} />,
        name: "Активные студенты",
        path: "/students",
        element: <Home />,
      },
      {
        icon: <PhotoIcon {...icon} />,
        name: "Фотографии",
        path: "/intro",
        element: <Home />,
      },
      {
        icon: <ChatBubbleOvalLeftEllipsisIcon {...icon} />,
        name: "Cписок контактов",
        path: "/contact",
        element: <Home />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];

export default routes;
