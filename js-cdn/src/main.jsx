import React from "https://esm.sh/react@^18.3.1";
import ReactDOM from "https://esm.sh/react-dom@^18.3.1";
import ReactDOMClient from "https://esm.sh/react-dom@^18.3.1/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthContext.jsx";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
