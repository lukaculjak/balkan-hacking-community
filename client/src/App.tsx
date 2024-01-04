// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { lazy, Suspense, useEffect, useContext, useState } from "react";
import { UserProvider, UserContext } from "./contexts/UserContext";

import GlobalStyles from "./styles/GlobalStyles";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Login = lazy(() => import("./pages/login/index"));
const Register = lazy(() => import("./pages/register/index"));
const Home = lazy(() => import("./pages/home/index"));
const PageNotFound = lazy(() => import("./pages/notFound"));

// const routerPath = createBrowserRouter([
//   { path: "/login", element: <Login /> },
//   { path: "/register", element: <Register /> },
//   { path: "/home", element: <Home /> },
//   { path: "*", element: <PageNotFound /> },
// ]);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <GlobalStyles />
      <UserProvider setIsLoggedIn={setIsLoggedIn}>
        <Suspense fallback={<SpinnerFullPage />}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Navigate replace to="login" />} />
              <Route path="login" element={<Login isLoggedIn={isLoggedIn} />} />
              <Route path="register" element={<Register />} />
              <Route path="home" element={<Home />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </UserProvider>
    </>
  );
}

export default App;
