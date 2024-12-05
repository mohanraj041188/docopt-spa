import { useEffect, useState } from "react";
import { MapContainer } from 'react-leaflet/MapContainer';
import { ClientOnly } from 'remix-utils/client-only';

export default function Map() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      },
      (err) => {
        setError(`Error: ${err.message}`);
      }
    );
  }, []);

  return (
    <>
      <ClientOnly>
        {() => (
          <MapContainer center={[location.lat, location.lng]} zoom={13} scrollWheelZoom={false} />
        )}
      </ClientOnly>
    </>
  );
}
