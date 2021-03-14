import { useEffect } from "react";

const useTimeout = (time = 1000, callback, dependencies = []) => {
  useEffect(() => {
    const timeout = setTimeout(callback, time);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

export default useTimeout;
