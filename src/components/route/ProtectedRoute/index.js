import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import { getToken, getNewToken, logout } from "../../../utils/inMemoryToken";
import Spinner from "../../layouts/Spinner";
import Page from "../../layouts/Page";

const ProtectedRoute = (
  props,
  refreshToken = localStorage.getItem("refreshToken"),
  inMemoryToken = getToken()
) => {
  const [auth, setAuth] = useState({
    token: inMemoryToken.token,
    expirationDate: inMemoryToken.expirationDate,
  });

  useEffect(() => {
    const isTokenExpired = auth.token && auth.expirationDate <= new Date();
    const isNewSession = !auth.token && refreshToken;

    if (isTokenExpired || isNewSession) {
      getNewToken()
        .then(({ token, expirationDate }) => {
          setAuth({ token, expirationDate });
        })
        .catch(logout);
    }
    // eslint-disable-next-line
  }, []);

  if (!auth.token) {
    return (
      <Page>
        <Spinner />
      </Page>
    );
  } else {
    return <Route {...props} />;
  }
};

export default ProtectedRoute;
