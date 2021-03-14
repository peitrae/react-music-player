import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { login } from "../../utils/inMemoryToken";

import Page from "../../components/layouts/Page";
import Button from "../../components/inputs/Button";

const Home = () => {
  const location = useLocation();
  const history = useHistory();

  const scopes = encodeURIComponent("user-read-currently-playing user-read-recently-played streaming user-read-email user-read-private");
  const redirectUri = encodeURIComponent(process.env.REACT_APP_URL);
  const url = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=${scopes}&response_type=code&redirect_uri=${redirectUri}`;
  const code = new URLSearchParams(location.search).get("code");

  useEffect(() => {
    code &&
      login(code)
        .then(() => {
          history.push("/player");
        })
        .catch((error) => {
          console.error(error);
        });
  }, [code, history]);

  return (
    <Page>
      <Button as="a" href={url} size="lg">
        Sign in with Spotify Premium
      </Button>
    </Page>
  );
};

export default Home;
