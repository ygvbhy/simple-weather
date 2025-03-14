import { useState, useEffect } from "react";

const WeatherComponent = () => {
  const [location, setLocation] = useState<{ lat: number | null; lon: number | null }>({
    lat: null,
    lon: null,
  });

  useEffect(() => {
    console.log(navigator.geolocation);

    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);

        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting location:", error);
      },
    );
  }, []);

  return (
    <div>
      <div>{location.lat}</div>
      <div>{location.lon}</div>
    </div>
  );
};

export default WeatherComponent;
