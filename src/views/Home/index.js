import React from "react";

import Page from "../../components/layouts/Page";
import Button from "../../components/inputs/Button";

const Home = () => (
  <Page>
    <Button as="a" href={"/"} size="lg">
      Sign in with Spotify Premium
    </Button>
  </Page>
);

export default Home;
