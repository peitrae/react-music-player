import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { logoutListener } from "./utils/inMemoryToken";

import Theme from "./theme";
import Home from "./views/Home";
import Main from "./views/Main";
import ProtectedRoute from "./components/route/ProtectedRoute";

function App() {
  useEffect(() => {
    window.addEventListener("storage", logoutListener);

    return () => window.removeEventListener("storage", logoutListener);
  }, []);

  return (
    <BrowserRouter>
      <Theme>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/player" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
