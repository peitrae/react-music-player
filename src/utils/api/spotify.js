import axios from "axios";

const urlPlayer = "https://api.spotify.com/v1/me/player";

export const transferUserPlayback = async (token, deviceIds) => {
  const body = {
    device_ids: deviceIds,
  };

  try {
    return await axios.put(`${urlPlayer}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
