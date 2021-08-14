import { createContext, useContext, useEffect, useState } from "react";
import { auth, firestore, googleAuthProvider } from "../lib/firebase";
import Loader from "../components/common/Loader";

const AuthContext = createContext({});

const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [user, setUser] = useState({ user: null, loading: true });
  const [loading, setLoading] = useState(true);

  function login() {
    return auth.signInWithPopup(googleAuthProvider);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(usr => {
      setUser({ user: usr, loading: false });
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ ...user, login, logout }}>
      {!user.loading ? (
        children
      ) : (
        <div className="flex justify-center mt-2">
          <Loader color={"#ffffff"} loading={user?.loading} size={20} />
        </div>
      )}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider };
