import { useEffect } from "react";

const useSpotify = ({ token, onPlayerReady }) => {
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const spotifySDK = new window.Spotify.Player({
        name: "Songbird",
        getOAuthToken: (cb) => {
          cb(token);
        },
      });

      spotifySDK.on("initialization_error", ({ message }) => {
        console.error(`Initialization Error: ${message}`);
      });

      spotifySDK.on("authentication_error", ({ message }) => {
        console.error(`Authentication Error: ${message}`);
      });

      spotifySDK.on("account_error", ({ message }) => {
        console.error(`Account Error: ${message}`);
      });

      spotifySDK.on("playback_error", ({ message }) => {
        console.error(`Playback Error: ${message}`);
      });

      spotifySDK.addListener("ready", onPlayerReady);

      spotifySDK.connect();
    }; // eslint-disable-next-line
  }, [token]);
};

export default useSpotify;
