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

export const pauseTrack = async (token, deviceId) => {
  const url = `${urlPlayer}/pause`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const params = {
    device_id: deviceId,
  };

  try {
    return await axios.put(url, null, { headers, params });
  } catch (error) {
    throw new Error(error);
  }
};

export const nextTrack = async (token, deviceId) => {
  const url = `${urlPlayer}/next`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const params = {
    device_id: deviceId,
  };

  try {
    return await axios.post(url, null, {
      headers,
      params,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const previousTrack = async (token, deviceId) => {
  const url = `${urlPlayer}/previous`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const params = {
    device_id: deviceId,
  };

  try {
    return await axios.post(url, null, {
      headers,
      params,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const seekPositionTrack = async (token, deviceId, positionMs = 0) => {
  const url = `${urlPlayer}/seek`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const params = {
    device_id: deviceId,
    position_ms: positionMs,
  };

  try {
    return await axios.put(url, null, {
      headers,
      params,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const toggleShuffle = async (token, deviceId, state) => {
  const url = `${urlPlayer}/shuffle`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const params = {
    device_id: deviceId,
    state,
  };

  try {
    return await axios.put(url, null, {
      headers,
      params,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const setRepeatMode = async (token, deviceId, state) => {
  const url = `${urlPlayer}/repeat`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const params = {
    device_id: deviceId,
    state,
  };

  try {
    return await axios.put(url, null, {
      headers,
      params,
    });
  } catch (error) {
    throw new Error(error);
  }
};