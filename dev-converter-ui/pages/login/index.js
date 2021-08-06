import { useEffect } from "react";
import Router from "next/router";
// import { useContext } from "react";
// import { UserContext } from "@lib/context";
import Login from "@components/common/Login";
import { auth, firestore, googleAuthProvider } from "@lib/firebase";
import { AuthProvider, useAuth } from "@lib/auth.context";

export default function Index() {
  // const { user } = useContext(UserContext);
  const { user, login } = useAuth();

  const signInWithGoogle = async () => {
    try {
      // setError("");
      // setLoading(true);
      await login();
      Router.push("/home");
    } catch {
      alert("Failed to log in");
    }
  };

  useEffect(() => {
    if (user) {
      Router.push("/home");
    }
  }, [user]);

  return <Login signInWithGoogle={signInWithGoogle} />;
}
