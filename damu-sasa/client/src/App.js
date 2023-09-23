// import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Fetch from "./components/Fetch/Fetch";

import Register from "./components/Register/Register";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Register />,
        },
        // {
        //   path: "/",
        //   element: <Home />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
