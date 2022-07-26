import React, { Suspense, useMemo } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { routes } from "./configs/routes";
import { UserContext } from "./context/context";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Sidebar from "./components/elements/Sidebar";

// const ListData = React.lazy(() => import("./pages/ListData"));
const TambahData = React.lazy(() => import("./pages/TambahData"));
const Landing = React.lazy(() => import("./pages/Landing"));
const Login = React.lazy(() => import("./pages/Login"));
const DetailBudaya = React.lazy(() =>
  import("./components/fragments/DetailBudaya")
);
const Home = React.lazy(() => import("./pages/Home"));
const MapsPage = React.lazy(() => import("./pages/MapsPage"));
const ListData = React.lazy(() => import("./pages/ListData"));

function App() {
  const [user, setUser] = useLocalStorage("user");
  const userProvider = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  return (
    <UserContext.Provider value={userProvider}>
      <Suspense fallback={<div>Loading..</div>}>
        <Router>
          <Routes>
            <Route element={<Landing />} exact path="/">
              <Route element={<Home />} exact path="/" />
              <Route element={<MapsPage />} exact path="/maps" />
            </Route>
            <Route element={<DetailBudaya />} exact path="/detail-budaya" />
            <Route element={<Login />} exact path="/login" />
            <Route
              element={
                <ProtectedRoute user={user}>
                  <Sidebar />
                </ProtectedRoute>
              }
              exact
              path={routes.ADMIN()}
            >
              <Route element={<ListData />} exact path={routes.ADMIN()} />
              <Route
                element={<TambahData />}
                exact
                path={routes.ADD_BUDAYA()}
              />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </UserContext.Provider>
  );
}
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to={routes.LOGIN()} replace />;
  }

  return children ? children : <Outlet />;
};

export default App;
