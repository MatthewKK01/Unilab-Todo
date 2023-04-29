/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "your name",
    image: "",
  });

  return (
    <UserContext.Provider value={[data, setData]}>
      {children}
    </UserContext.Provider>
  );
};
