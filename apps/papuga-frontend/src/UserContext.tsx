import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContextProvider: React.FC<UserContextProviderProps> = (
  props: UserContextProviderProps
) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/users/userInfo", { credentials: "include" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          window.location.href = "http://localhost:4000/login";
        }
      })
      .then((result) => setUserInfo(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};
