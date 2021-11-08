import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContexts = createContext(null)
const AuthProvider = ({children}) => {
    const AllContexts = useFirebase()
    return (
        <AuthContexts.Provider value={AllContexts}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthProvider;