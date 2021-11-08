import { useContext } from "react";
import { AuthContexts } from "../contexts/AuthProvider/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContexts)

    return auth;
};

export default useAuth;