import axios from "axios";

const urlPlayer = "https://api.spotify.com/v1/me/player";

export const getCurrentlyPlaying = async (token) => {
  try {
    return await axios.get(`${urlPlayer}/currently-playing`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const getRecentlyPlayed = async (token, limit = 1) => {
  try {
    return await axios.get(`${urlPlayer}/recently-played`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const getInitialPlayer = async (token) => {
  try {
    const { data: currentlyPlaying } = await getCurrentlyPlaying(token);

    if (currentlyPlaying) {
      const { item, progress_ms, is_playing } = currentlyPlaying;

      return {
        track: {
          id: item.id,
          image: item.album.images[1].url || item.album.images[0].url,
          artists: item.artists,
          name: item.name,
          uri: item.uri,
          durationMs: item.duration_ms,
        },
        progressMs: progress_ms,
        isPlaying: is_playing,
      };
    } else {
      const { data: recentlyPlayed } = await getRecentlyPlayed(token);
      const item = recentlyPlayed.items[0].track;

      return {
        track: {
          id: item.id,
          image: item.album.images[1].url || item.album.images[0].url,
          artists: item.artists,
          name: item.name,
          uri: item.uri,
          durationMs: item.duration_ms,
        },
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const playTrack = async (token, deviceId, trackUri, positionMs = 0) => {
  const body = {
    uris: [trackUri],
    position_ms: positionMs,
  };

  try {
    return await axios.put(`${urlPlayer}/play?device_id=${deviceId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};