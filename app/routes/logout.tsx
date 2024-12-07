import React from "react";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      // Call the API to destroy the session
      const response = await fetch("/api/logout", { method: "POST" });
      if (response.ok) {
        // Redirect to the homepage
        window.location.href = "/";
      } else {
        console.error("Failed to log out.");
      }
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}
