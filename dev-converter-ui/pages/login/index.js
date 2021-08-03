import { useEffect } from "react";
import { auth, firestore, googleAuthProvider } from "@lib/firebase";
import Router from "next/router";
import { useContext } from "react";
import { UserContext } from "@lib/context";
import Login from "@components/common/Login";

export default function Index() {
  const { user } = useContext(UserContext);

  const signInWithGoogle = async () => {
    const result = await auth.signInWithPopup(googleAuthProvider);
    if (result.user) {
      Router.push("/home");
    }
  };

  useEffect(() => {
    if (user) {
      Router.push("/home");
    }
  }, [user]);

  return <Login signInWithGoogle={signInWithGoogle} />;
}
