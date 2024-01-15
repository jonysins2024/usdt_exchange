import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main_Page from './Components/Main_Page/Main_Page';
import "./index.css";
import Homepage from "./Components/Homepage/Homepage";
import Igaming from "./Components/Igaming/Igaming";
import D_Marketing from "./Components/D_Marketing/D_Marketing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Page></Main_Page>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      },
      {
        path: "/game",
        element: <Igaming></Igaming>
      },
      {
        path: "/D_Marketing",
        element: <D_Marketing></D_Marketing>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);