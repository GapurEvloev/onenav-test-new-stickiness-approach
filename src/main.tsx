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
import NewNavigation from "./pages/NewNavigation.tsx";

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
              path: "/newnavigation",
              element: <NewNavigation />,
              children: [
                {
                  path: "newnavigation/:id",
                  element: <NewNavigation />,
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
      <RouterProvider router={router} />
)
