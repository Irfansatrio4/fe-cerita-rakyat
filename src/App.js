import React, { Suspense, useMemo } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

const ListData = React.lazy(() => import("./pages/ListData"));
const TambahData = React.lazy(() => import("./pages/TambahData"));
const Landing = React.lazy(() => import("./pages/Landing"));
const Login = React.lazy(() => import("./pages/Login"));
const DetailBudaya = React.lazy(() =>
  import("./components/fragments/DetailBudaya")
);
const Home = React.lazy(() => import("./pages/Home"));
const MapsPage = React.lazy(() => import("./pages/MapsPage"));

function App() {
  // const [user, setUser] = useLocalStorage("user");
  // const userProvider = useMemo(
  //   () => ({
  //     user,
  //     setUser,
  //   }),
  //   [user, setUser]
  // );

  return (
    // <UserContext.Provider value={userProvider}>
    <Suspense fallback={<div>Loading..</div>}>
      <Router>
        <Routes>
          <Route element={<Landing />} exact path="/">
            <Route element={<Home />} exact path="/" />
            <Route element={<MapsPage />} exact path="/maps" />
          </Route>
          <Route element={<DetailBudaya />} exact path="/detail-budaya" />
          <Route element={<Login />} exact path="/login" />
          {/* <Route
            element={
              <ProtectedRoute user={user}>
                <PageBase />
              </ProtectedRoute>
            }
            exact
            path={routes.ADMIN()}
          > */}
          <Route element={<ListData />} exact path="/admin" />
          <Route element={<TambahData />} exact path="/admin/tambah-data" />
          {/* </Route> */}
        </Routes>
      </Router>
    </Suspense>
    // </UserContext.Provider>
  );
}

export default App;
