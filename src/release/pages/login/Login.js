import React from "react";
import LoginView from "./LoginView";
import { useNavigate } from "react-router-dom";
function Login(props){
    const navigate = useNavigate();
    function handleLogin(props){
        navigate('/home')
    }
    function onSubmit(props){

    }
    return(
        <LoginView
        onSubmit = {onSubmit}
        handleLogin={handleLogin}
        />
    )
}
export default Login;