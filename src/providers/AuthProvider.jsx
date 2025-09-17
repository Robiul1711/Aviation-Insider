import { AuthContext } from "@/context";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [catSearch, setCatSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [user, setUserState] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );

  const setUser = (newUser) => {
    newUser
      ? localStorage.setItem("user", JSON.stringify(newUser))
      : localStorage.removeItem("user");
    setUserState(newUser);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, catSearch, setCatSearch, sortBy, setSortBy }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
