import React from "react";

import Page from "../../components/layouts/Page";
import Player from "../../components/modules/Player";
import { logout } from "../../utils/inMemoryToken";
import { LogoutButton } from "./styles";

const Main = () => (
  <Page>
    <LogoutButton variant="outlined" size="sm" color="white" onClick={logout}>
      Logout
    </LogoutButton>
    <Player />
  </Page>
);

export default Main;
