import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import { UserProvider, UserContext } from "./contexts/UserContext";

import GlobalStyles from "./styles/GlobalStyles";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Login = lazy(() => import("./pages/login/index"));
const Register = lazy(() => import("./pages/register/index"));
const Home = lazy(() => import("./pages/home/index"));
const PageNotFound = lazy(() => import("./pages/notFound"));

const routerLogin = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <PageNotFound /> },
]);

const routerAccess = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <UserProvider>
      <GlobalStyles />
      <Suspense fallback={<SpinnerFullPage />}>
        {isLoggedIn ? (
          <RouterProvider router={routerAccess} />
        ) : (
          <RouterProvider router={routerLogin} />
        )}
      </Suspense>
    </UserProvider>
  );
}

export default App;
