import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  updateUser: () => {},
  loading: false,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("auth_user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(false);

  // ✅ SIGNUP
  const signup = async (name, email, password) => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 600));

      if (!email.includes("@")) throw new Error("Invalid email");
      if (password.length < 4) throw new Error("Password too short");

      const fakeUser = { id: Date.now(), name, email };
      setUser(fakeUser);
      localStorage.setItem("auth_user", JSON.stringify(fakeUser));

      setLoading(false);
      return { ok: true };
    } catch (err) {
      setLoading(false);
      return { ok: false, error: err.message };
    }
  };

  // ✅ LOGIN
  const login = async (email, password) => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 500));

      if (!email.includes("@")) throw new Error("Invalid email");

      const fakeUser = { id: Date.now(), email, name: email.split("@")[0] };
      setUser(fakeUser);
      localStorage.setItem("auth_user", JSON.stringify(fakeUser));

      setLoading(false);
      return { ok: true };
    } catch (err) {
      setLoading(false);
      return { ok: false, error: err.message };
    }
  };

  // ✅ LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
    window.location.href = "/login";
  };

  // ✅ UPDATE PROFILE (NEW)
  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("auth_user", JSON.stringify(updatedUser));
  };

  // ✅ PROVIDER VALUE
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        updateUser, // ✅ included
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ✅ custom hook
export function useAuth() {
  return useContext(AuthContext);
}
