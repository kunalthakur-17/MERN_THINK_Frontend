import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token") || localStorage.getItem("token");

  // Check if token exists
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Check if token is expired
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Date.now() / 1000;
    // Only check expiration if exp field exists
    if (payload.exp && payload.exp < currentTime) {
      sessionStorage.clear();
      localStorage.clear();
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    console.log('Token validation error:', error);
    // Don't clear storage on parsing error, token might still be valid
  }

  return children;
};

export default ProtectedRoute;
