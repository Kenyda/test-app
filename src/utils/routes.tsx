import NotFoundPage from "../pages/NotFoundPage";
import Dashboard from "../pages/Dashboard";
import PostPage from "../components/posts/PostPage";
import Posts from "../pages/Posts";
import Charts from "../pages/Charts";
import { Navigate, Outlet, RouteObject } from "react-router-dom";
import React from "react";
import PostCreateForm from "../components/posts/PostCreateForm";

export interface IRoute extends RouteObject {
  name?: string;
  children?: IRoute[];
}

export const routes: IRoute[] = [
  {
    path: "/",
    element: <Outlet />,
    name: "Главная",
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "/schedules",
        element: <Charts />,
        name: "Аналитика",
      },
      {
        path: "/posts",
        element: <Outlet />,
        name: "Интересные факты",
        children: [
          { index: true, element: <Posts /> },
          { path: "/posts/:id", element: <PostPage />, name: "Факт" },
          {
            path: "/posts/create",
            element: <PostCreateForm />,
            name: "Добавить факт",
          },
        ],
      },
    ],
  },
  { path: "/not_found", element: <NotFoundPage /> },
  { path: "*", element: <Navigate replace to="/not_found" /> },
];
