import React from "react";
import RegisterView from "./RegisterView";
import { useNavigate } from "react-router-dom";

function Register(props){
    const navigate = useNavigate() ;
    function handleRegister(props){
        navigate('/login')
    }
    return(
        <div>
            <RegisterView
            handleRegister={handleRegister}
            />
        </div>
    )
}
export default Register;