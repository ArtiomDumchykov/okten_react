import {useContext} from "react";
import {Context} from "./AuthContextProvider";
import {Navigate, useLocation} from "react-router-dom";

const AuthRequired = ({children}) => {
    const {authContext: {isLogin}} = useContext(Context)
    const {pathname} = useLocation();

    if (!isLogin){
        return <Navigate to={'/login'} state={pathname}/>
    }
    return children
};

export  {AuthRequired};
