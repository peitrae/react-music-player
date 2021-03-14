import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REDIRECT_URI = process.env.REACT_APP_URL;

let inMemoryToken = {
  token: null,
  expirationDate: null,
};

export const getToken = () => inMemoryToken;

export const setToken = (token, expirationDate) => {
  inMemoryToken = {
    token,
    expirationDate,
  };

  return true;
};

export const deleteToken = () => {
  inMemoryToken = {
    token: null,
    expirationDate: null,
  };

  return true;
};

export const login = async (
  code,
  url = "https://accounts.spotify.com/api/token"
) => {
  const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const headers = {
    Authorization: `Basic ${auth}`,
    "content-type": "application/x-www-form-urlencoded",
  };
  const params = {
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
  };

  try {
    const { data } = await axios.post(url, null, {
      headers,
      params,
    });

    const expirationDate = new Date(
      new Date().getTime() + data.expires_in * 1000
    );

    const isTokenSaved = setToken(data.access_token, expirationDate);
    localStorage.setItem("refreshToken", data.refresh_token);

    if (isTokenSaved) {
      return getToken();
    } else {
      throw new Error("Login: Error while trying save token");
    }
  } catch (error) {
    throw new Error(`Login: ${error}`);
  }
};

export const getNewToken = async (
  refreshToken = localStorage.getItem("refreshToken"),
  url = "https://accounts.spotify.com/api/token"
) => {
  const headers = {
    Authorization: `Basic ${Buffer.from(
      `${CLIENT_ID}:${CLIENT_SECRET}`
    ).toString("base64")}`,
    "content-type": "application/x-www-form-urlencoded",
  };
  const params = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  };

  try {
    const { data } = await axios.post(url, null, { headers, params });

    const expirationDate = new Date(
      new Date().getTime() + data.expires_in * 1000
    );

    const isTokenSaved = setToken(data.access_token, expirationDate);

    if (isTokenSaved) {
      return getToken();
    } else {
      throw new Error("Request New Token: Error while trying save token");
    }
  } catch (error) {
    throw new Error(`Request New Token: ${error}`);
  }
};

export const logout = async () => {
  deleteToken();
  localStorage.setItem("logout", Date.now());
  localStorage.clear();
  window.location.href = REDIRECT_URI;
};
