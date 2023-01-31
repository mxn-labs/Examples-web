import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/auth";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </SessionProvider>
  );
}