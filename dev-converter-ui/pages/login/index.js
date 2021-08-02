import { useEffect } from "react";
import { auth, firestore, googleAuthProvider } from "@lib/firebase";
import Router from "next/router";
import { useContext } from "react";
import { UserContext } from "@lib/context";

export default function Index() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      Router.push("/home");
    }
  }, [user]);

  const signInWithGoogle = async () => {
    const result = await auth.signInWithPopup(googleAuthProvider);
    if (result.user) {
      Router.push("/home");
    }
  };

  return (
    <>
      <button onClick={signInWithGoogle} className="text-white">
        Google login
      </button>
    </>
  );
}
