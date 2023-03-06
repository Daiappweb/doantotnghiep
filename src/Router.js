import React from "react";
import { Routes,Route } from "react-router-dom";
import LandingPage from "./release/pages/landing/LandingPage";
import LoginPage from "./release/pages/login/Login";
import HomePage from "./release/pages/home/Home";
import RegisterPage from "./release/pages/register/Register";
import { paths } from "./release/paths.config";
import Notifications from "./release/pages/notification/Notifications";
import Order from "./release/pages/order/Order";
import Subcription from "./release/pages/subcription/Subcription";


function AppRouter(){
    return(
        <Routes>
            <Route path={paths.landing} element={<LandingPage/>}></Route>
            <Route path={paths.login} element={<LoginPage/>}></Route>
            <Route path={paths.register} element={<RegisterPage/>}></Route>
            <Route path={paths.home} element={<HomePage/>}></Route>
            <Route path={paths.notification} element={<Notifications/>}/>
            <Route path={paths.order} element={<Order/>}/>
            <Route path={paths.subscription} element={<Subcription/>}/>
        </Routes>
    )
}
export default AppRouter;