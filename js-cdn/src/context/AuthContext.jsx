/* eslint-disable react/prop-types */
import {
  createContext,
  useEffect,
  useState,
} from "https://esm.sh/react@^18.3.1";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const storedData = JSON.parse(localStorage.getItem("user_data"));

  useEffect(() => {
    if (storedData) {
      const { userToken, user } = storedData;
      setToken(userToken);
      setUserData(user);
      setIsAuthenticated(true);
    }
  }, [storedData]);

  function login(newToken, newData) {
    localStorage.setItem(
      "user_date",
      JSON.stringify({ userToken: newToken, user: newData })
    );

    setToken(newToken);
    setUserData(newData);
    setIsAuthenticated(true);
    console.log(isAuthenticated);
  }

  function logout() {
    localStorage.removeItem("user_data");
    setToken(null);
    setUserData(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, login, logout, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// export function useAuth() {
//     useContext(AuthContext);
// }
