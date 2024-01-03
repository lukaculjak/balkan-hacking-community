import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import axios from "axios";
import React from "react";

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext({
  email: "",
  password: "",
  isLoggedIn: false,
  userDetails: undefined,
  setEmail: Dispatch<SetStateAction<string>>,
  setPassword: Dispatch<SetStateAction<string>>,
});

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(undefined);

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
        console.log(res);

        // Set user details in state if login is successful
        setUserDetails(res.data); // Assuming your user details are in res.data
        setIsLoggedIn(true);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err.response?.data);
        } else {
          console.log(err);
        }
      }
    }

    loginUser(); // Call the function directly since it doesn't rely on any dependencies

    // If you have any cleanup logic, you can return a function for that purpose
    return () => {
      // Cleanup logic here, if needed
    };
  }, [email, password]); // Include email and password in the dependency array if they are used inside the useEffect

  return (
    <UserContext.Provider value={{ email, password, isLoggedIn, userDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
