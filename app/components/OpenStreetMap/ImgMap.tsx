import { useSearchParams } from "@remix-run/react";
import { useState, useEffect } from "react";

const Map = () => {
  const [searchParams] = useSearchParams();
  const zoom = searchParams.get("zoom") || "14";
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  
  const lat = searchParams.get("lat") || location?.lat;
  const lng = searchParams.get("lng") || location?.lng;
  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const imageUrl = `/map?lat=${lat}&lng=${lng}&zoom=${zoom}&amenity=hospital`;

  return (
    <>
      <div className="search-results_map--background-img" style={{backgroundImage:`url(${imageUrl})`}}></div>
    </>
  );
};

export default Map;
