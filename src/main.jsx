import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import ErrorPage from './ErrorPage.jsx';
import About from './routes/About.jsx';
import Contact from './routes/Contact.jsx';
import NewsFrontend from './routes/NewsFrontend.jsx';
import Projects from './routes/Projects.jsx'
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
    path: "contact",
    element: <Contact />,
  },
  {
    path: "projects",
    element: <Projects/>,
  },
  {
    path: "projects/frontend-news-app",
    element: <NewsFrontend />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);