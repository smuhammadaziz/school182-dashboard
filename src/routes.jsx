import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import {
  Home,
  Groups,
  Students,
  Classes,
  News,
  Sliderr,
  Admins,
} from "@/pages/dashboard";
const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "Sinflar",
        path: "/class",
        element: <Classes />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "Yangilik",
        path: "/news",
        element: <News />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Slider",
        path: "/side",
        element: <Sliderr />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Maktab mamuriyati",
        path: "/administration",
        element: <Admins />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Ustozlar",
        path: "/teachers",
        element: <Students />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "O'quvchilar",
        path: "/students",
        element: <Home />,
      },
      {
        icon: <Cog6ToothIcon {...icon} />,
        name: "Kurslar",
        path: "/course",
        element: <Home />,
      },
    ],
  },
];

export default routes;
