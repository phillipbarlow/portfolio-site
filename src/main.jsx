import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import ErrorPage from './ErrorPage.jsx';
import About from './routes/About.jsx';
import NewsFrontend from './routes/NewsFrontend.jsx';
import NewsBackend from './routes/NewsBackend.jsx';
import Projects from './routes/Projects.jsx';
import LeedsYouAround from './routes/LeedsYouAround.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "projects",
    element: <Projects/>,
  },
  {
    path: "projects/backendnews",
    element: <NewsBackend/>,
  },
  {
    path: "backendnews",
    element: <NewsBackend/>,
  },
  {
    path: "projects/leedsYouAround",
    element: <LeedsYouAround/>,
  },
  {
    path: "leedsYouAround",
    element: <LeedsYouAround/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);