import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import React from "react";

interface UserProviderProps {
  children: ReactNode;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserContextType {
  email: string;
  password: string;
  userDetails: undefined;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  loginUser: () => Promise<void>;
  setFetch: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<UserProviderProps> = ({
  children,
  setIsLoggedIn,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState(undefined);
  const [fetch, setFetch] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    async function loginUser() {
      try {
        const res = await axios({
          method: "POST",
          url: "http://127.0.0.1:5000/api/v1/users/login",
          data: {
            email,
            password,
          },
        });

        // Set user details in state if login is successful
        setUserDetails(res.data.data.user); // Assuming your user details are in res.data
        setToken(res.data.token);
        setIsLoggedIn(true);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err.response?.data);
          setFetch(false);
          setIsLoggedIn(false);
        } else {
          console.log(err);
          setFetch(false);
          setIsLoggedIn(false);
          //TODO: OBRISI OVAJ ISLOGEDING
        }
      }
    }

    loginUser(); // Call the function directly since it doesn't rely on any dependencies

    // If you have any cleanup logic, you can return a function for that purpose
    return () => {
      // Cleanup logic here, if needed
    };
  }, [fetch]); // Include email and password in the dependency array if they are used inside the useEffect

  const contextValue: UserContextType = {
    email,
    password,
    userDetails,
    setEmail,
    setPassword,
    loginUser: async () => {},
    setFetch,
    token,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };
