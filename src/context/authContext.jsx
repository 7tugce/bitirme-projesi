import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = async (fullName, email, passwd) => {
          try {
            const response = await axios.post(
              "http://localhost:8080/api/teachers/save",
              {
                fullName: fullName,
                email: email,
                password: passwd
              },
              {
                headers: {
                  "Content-Type": "application/json;charset=UTF-8"
                  // Diğer istek başlıklarını buraya ekleyebilirsiniz
                }
              }
            );
        
            // response ile ilgili diğer işlemleri yapabilirsiniz
            return response;
          } catch (error) {
            // Hata durumunda yapılacak işlemleri buraya ekleyebilirsiniz
            console.error("Login error:", error);
            throw error; // Hata durumunu çağıran kod bloğuna iletebilirsiniz
          }
        };
        
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
