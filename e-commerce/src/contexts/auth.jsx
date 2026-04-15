import { createContext, useState } from "react";

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    recoveryPassword: () => {},
    loginWithGoogle: () => {},
    loginWithToken: () => {},
});

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = () => {
        console.log('Login')

        //

        setUser({
            name: "Adrian",
            email: "adrian@example.com",
            phone: "1234567890"
        })
    }

    const logout = () => {
        console.log('Logout')
        //
    }

    const recoveryPassword = () => {
        console.log('Recovery Password')
        //
    }

    const loginWithGoogle = () => {
        console.log('Login with Google')
        //
    }   

    const loginWithToken = () => {
        console.log('Login with Token')
        //
    }


    return(
        <AuthContext.Provider value={{ user, login, logout, recoveryPassword, loginWithGoogle, loginWithToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }