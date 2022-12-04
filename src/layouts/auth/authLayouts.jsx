import { Route, Routes } from "react-router-dom";
import Login from "../../pages/auth/login";

const AuthLayouts = ()=>{
    return(
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <Routes>
                        <Route path="/login" element={<Login />}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default AuthLayouts;