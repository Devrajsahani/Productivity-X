import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // redirect to login AND remember where user wanted to go
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}
