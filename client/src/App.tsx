import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Login = lazy(() => import("./pages/login/index"));
const Register = lazy(() => import("./pages/register/index"));
const Home = lazy(() => import("./pages/home/index"));
const PageNotFound = lazy(() => import("./pages/notFound"));

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <Home /> },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<SpinnerFullPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
