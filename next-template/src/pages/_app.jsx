import { SessionProvider } from "next-auth/react";

import { AuthProvider } from "@/context/auth";
import "@/styles/globals.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider refetchInterval={5 * 60} refetchOnWindowFocus={true}>
      <AuthProvider>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
