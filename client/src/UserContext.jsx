import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {data} from "autoprefixer";
import API_BASE_URL from "./config"; // Import the backend URL
export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
  const [ready,setReady] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get('${API_BASE_URL}/profile').then(({data}) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{user,setUser,ready}}>
      {children}
    </UserContext.Provider>
  );
}
