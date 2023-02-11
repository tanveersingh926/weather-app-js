import React, { useEffect, useState } from "react";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function useGeoLocation() {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  const onSuccess = (pos) => {
    const crd = pos.coords;
    setCoords({ lat: crd.latitude, lon: crd.longitude });
  };

  const onError = (err) => {
    console.warn(`err(${err.code}): ${err.message}`);
    setError(error);
  };

  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(onSuccess, onError, options);
  }, []);

  return { coords, error };
}

export default useGeoLocation;
