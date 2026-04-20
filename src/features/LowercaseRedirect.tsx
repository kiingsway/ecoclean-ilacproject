import { useLocation, Navigate } from "react-router-dom";

export default function LowercaseRedirect() {
  const location = useLocation();
  const lower = location.pathname.toLowerCase();

  if (location.pathname !== lower) {
    return <Navigate to={lower} replace />;
  }

  return null;
}