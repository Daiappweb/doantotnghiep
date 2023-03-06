import React from "react";
import LandingPageView from "./LandingPageView";
import { useNavigate } from "react-router-dom";

function LandingPage(props){
    const navigate = useNavigate();
    const handleLogin=(props)=>{
        navigate('/login')
    }
    const  handleRegister=(props)=>{
        navigate('/register')
    }
    
    return(
        <LandingPageView
        handleRegister={handleRegister}
        handleLogin={handleLogin}
        />
    )
}
export default LandingPage;