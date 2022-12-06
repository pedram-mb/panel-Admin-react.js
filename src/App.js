import React from "react";
import { useLocation } from "react-router-dom";
import AdminLayout from "./layouts/admin";
import AuthLayouts from "./layouts/auth/authLayouts";

const App = ()=>{
    const location = useLocation()
    return(
        <>
            {
                location.pathname.includes('/auth') ? (       
                    <AuthLayouts />
                ) : (
                    <AdminLayout />
                )
            }
        </>
    )
}
export default App;