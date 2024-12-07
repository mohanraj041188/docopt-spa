import React, { useState, useEffect } from "react";

export default function MapComponent() {
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Extract parameters from the current URL
    const urlParams = new URLSearchParams(window.location.search);
    const lat = parseFloat(urlParams.get("lat") || "0");
    const lng = parseFloat(urlParams.get("lng") || "0");
    const zoom = parseInt(urlParams.get("zoom") || "14");

    if (lat === 0 || lng === 0) {
      setError("Missing latitude or longitude.");
      return;
    }

    // Fetch the map image from the API or utility function
    const fetchMapImage = async () => {
      try {
        // Replace with your API endpoint or utility to generate the map
        const response = await fetch(`/api/generate-map?lat=${lat}&lng=${lng}&zoom=${zoom}`);
        if (!response.ok) {
          throw new Error("Failed to fetch the map image.");
        }
        const blob = await response.blob();
        setImageUrl(URL.createObjectURL(blob));
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMapImage();
  }, []);

  return (
    <div>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : imageUrl ? (
        <img src={imageUrl} alt="Generated Map" />
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
}
