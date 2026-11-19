
import React, { createContext, useEffect, useState } from "react";

export const routeContext = createContext({});

function RouteGuard({ children }) {

    const [role, setRole] = useState('');
    const [authorizedUser, setAuthorizedUser] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const storedUser = sessionStorage.getItem("user");

        if (token && storedUser) {
            const user = JSON.parse(storedUser);
            setAuthorizedUser(true);
            setRole(user.role);
        }
    }, []);

    return (
        <routeContext.Provider
            value={{
                role,
                setRole,
                authorizedUser,
                setAuthorizedUser
            }}
        >
            {children}
        </routeContext.Provider>
    );
}

export default RouteGuard;
