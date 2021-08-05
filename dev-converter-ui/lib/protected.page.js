import Router from "next/router";
import { useContext, useEffect } from "react";
import { useAuth } from "./auth.context";
import { auth } from "./firebase";

export default function ProtectedPage(WrapperComponent) {
  function Wrapper() {
    const { user } = useAuth()
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
