import Router from "next/router";
import { useContext, useEffect } from "react";
import { UserContext } from "./context";
import { auth } from "./firebase";

export default function ProtectedPage(WrapperComponent) {
  function Wrapper() {
    const { user } = useContext(UserContext);
    useEffect(() => {
      if (!user) {
        Router.push("/login");
        // auth.signOut();
      }
    }, [user]);

    if (user) {
      return <WrapperComponent />;
    }
    return <div>Loading...</div>;
  }
  return Wrapper;
}
