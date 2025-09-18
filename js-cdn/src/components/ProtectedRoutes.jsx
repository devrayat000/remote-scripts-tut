import { useContext } from "https://esm.sh/react@^18.3.1";
import {
  Navigate,
  Outlet,
  useLocation,
} from "https://esm.sh/react-router-dom@^6.24.1?deps=react@^18.3.1,react-dom@^18.3.1";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoutes() {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  if (!isAuthenticated) {
    // Store the initial URL in sessionStorage
    sessionStorage.setItem("redirectBackTo", location.pathname);
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
