import React, { useState } from 'react';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    let [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {
                children
            }
        </UserContext.Provider>
    );
};

export default UserProvider;