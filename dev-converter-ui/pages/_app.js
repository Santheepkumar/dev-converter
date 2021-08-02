import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import "../styles/globals.css";
import { UserContext } from "@lib/context";
import useUserData from "@lib/hooks/useUserData";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <div className="h-screen">
        <Component {...pageProps} />
      </div>
    </UserContext.Provider>
  );
}

export default MyApp;
