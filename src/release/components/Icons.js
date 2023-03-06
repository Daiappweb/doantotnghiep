import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faSuitcase,faSignOut,faSign,faTelevision,faBell,faBars } from "@fortawesome/free-solid-svg-icons";

var iconStyle = {
    marginRight: 8,
    marginBottom: 0,
}
export function HomeIcon(props){
    return <FontAwesomeIcon icon={faHome} size='lg' color="#ffffff" width='24' height='24' style={iconStyle}/>
}
export function SuitcaseIcon(props){
    return <FontAwesomeIcon icon={faSuitcase} size='lg' color="#ffffff" width='24' height='24' style={iconStyle} />
}
export function TeleivsionIcon(props){
    return <FontAwesomeIcon icon={faTelevision} size='lg' color="#ffffff" width='24' height='24' style={iconStyle}/>
}
export function SignInIcon(props){
    return <FontAwesomeIcon icon={faSign} size='lg' color="#ffffff" width='24' height='24' style={iconStyle}/>
}
export function SignOutIcon(props){
    return <FontAwesomeIcon icon={faSignOut} size='lg' color="#ffffff" width='24' height='24' style={iconStyle}/>
}
export function BellIcon(props){
    return <FontAwesomeIcon icon={faBell} size='lg' color="#ffffff" width='24' height='24' style={iconStyle}/>
}
export function BarsIcon(props){
    return <FontAwesomeIcon icon={faBars} size='lg' color="#ffffff" width='24' height='24' style={iconStyle}/>
}


