import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import "../styles/globals.css";
import { AuthProvider } from "@lib/auth.context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Header />
        <div className="h-screen max-w-7xl mx-auto">
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </>
  );
}

export default MyApp;
