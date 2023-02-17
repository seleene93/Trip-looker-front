import { createContext, useEffect, useState } from "react";
import { getMyDataService } from "../services";

export const AuthContext = createContext(null);

export const AuthContextProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token")); // obtenemos el token guardado del localstorage
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("token", token); // cada vez que cambie el token guardara el token en el localstorage
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyDataService(token); // obtenemos ela info del usuario al que llamamos data para ahora setearlo en user

        setUser(data); // user dejará de ser null
      } catch (error) {
        // si hay error hará logout
        setToken("");
        setUser(null);
      }
    };

    if (token) getUserData();
  }, [token, setToken]);

  const logout = () => {
    // coloca el token vacio y el usuario a null
    setToken("");
    setUser(null);
  };

  const login = (token) => {
    // setea el token
    setToken(token);
  };
  // volvemos children envuelto en el contexto
  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
