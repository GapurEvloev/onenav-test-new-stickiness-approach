import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import ErrorPage from "./error-page.tsx";
import Grid from "./pages/Grid.tsx";
import Flexbox from "./pages/Flexbox.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/grid",
                element: <Grid />,
                children: [
                    {
                        path: "grid/:id",
                        element: <Grid />,
                    },
                ],
            },
            {
                path: "/flexbox",
                element: <Flexbox />,
                children: [
                    {
                        path: "flexbox/:id",
                        element: <Flexbox />,
                    },
                ],
            }
        ],
    },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
