import React from "react";

const pages = [
  {
    heading: "News",
    link: "/dashboard/news",
  },
  {
    heading: "Intro",
    link: "/dashboard/intro",
  },
  {
    heading: "Administration",
    link: "/dashboard/administration",
  },
  {
    heading: "Best Students",
    link: "/dashboard/students",
  },
  {
    heading: "Contact",
    link: "/dashboard/Contact",
  },
];

import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="mt-12">
      <h2 className="text-3xl">Добро пожаловать в Панель управления!</h2>

      <div className="flex grid mt-10 grid-rows-3 grid-flow-col gap-4">
        <div className="bg-white  p-10 px-20 m-5 shadow-xl hover:shadow-gray-400 hover:cursor-pointer">
          <p className="text-2xl">Новости</p>
          <NavLink
            to="/dashboard/news"
            className="hover:underline text-blue-600 mt-5 inline-block"
          >
            Перейти на страницу
          </NavLink>
        </div>
        <div className="bg-white p-10 px-20 m-5 shadow-xl hover:shadow-gray-400 hover:cursor-pointer">
          <p className="text-2xl">Администрация школы</p>
          <NavLink
            to="/dashboard/admins"
            className="hover:underline text-blue-600 mt-5 inline-block"
          >
            Перейти на страницу
          </NavLink>
        </div>
        <div className="bg-white p-10 px-20 m-5 shadow-xl hover:shadow-gray-400 hover:cursor-pointer">
          <p className="text-2xl">Активные студенты</p>
          <NavLink
            to="/dashboard/students"
            className="hover:underline text-blue-600 mt-5 inline-block"
          >
            Перейти на страницу
          </NavLink>
        </div>
        <div className="bg-white p-10 px-20 m-5 shadow-xl hover:shadow-gray-400 hover:cursor-pointer">
          <p className="text-2xl">Фотографии на главной странице</p>
          <NavLink
            to="/dashboard/intro"
            className="hover:underline text-blue-600 mt-5 inline-block"
          >
            Перейти на страницу
          </NavLink>
        </div>
        <div className="bg-white p-10 px-20 m-5 shadow-xl hover:shadow-gray-400 hover:cursor-pointer">
          <p className="text-2xl">Весь список контактов</p>
          <NavLink
            to="/dashboard/contacts"
            className="hover:underline text-blue-600 mt-5 inline-block"
          >
            Перейти на страницу
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
