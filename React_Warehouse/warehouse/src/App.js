import React, { useState, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MainNavigation from "./components/MainNavigation/MainNavigation";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

const Issue = React.lazy(() => import("../src/pages/Issue"));
const Summary = React.lazy(() => import("./pages/Summary"));

const App = () => {
  // const [showCart, setShowCart] = useState(false);

  // const showCartHandler = () => {
  //   setShowCart((p) => !p);
  // };

  return (
    <React.Fragment>
      <MainNavigation />
      <main className="main-main">
        <Suspense fallback={<p>Loading</p>}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/issue">
              <Issue />
            </Route>
            <Route path="/receive">
              <h1>Receive Page</h1>
            </Route>
            <Route path="/summary">
              <Summary />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
