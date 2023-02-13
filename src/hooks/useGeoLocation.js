import { useEffect, useState } from "react";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function useGeoLocation() {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const onSuccess = (pos) => {
    const crd = pos.coords;
    setCoords({ lat: crd.latitude, lon: crd.longitude });
    setLoading(false);
  };

  const onError = (err) => {
    console.warn(`err(${err.code}): ${err.message}`);
    setError(error);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const geoLocation = navigator?.geolocation;
    if (!geoLocation) {
      setError("GeoLocation not available");
      return;
    }

    geoLocation.getCurrentPosition(onSuccess, onError, options);

    return () => {
      setLoading(false);
    };
  }, []);

  return { coords, error, loading };
}

export default useGeoLocation;
