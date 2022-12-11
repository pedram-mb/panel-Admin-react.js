import React from "react";
import { Route, Routes } from "react-router-dom";
import Logout from "./auth/logout";
import Dashobord from "./dashbord/dashbord";
import Product from "./Product/Product";
import ProductCategory from "./productCategory/ProductCategory";

const Content = ()=>{
    return(
        <>
            <section className="main">
                <Routes>

                    <Route path="/" element={<Dashobord />} />
                
                    <Route path="/productcategory" element={<ProductCategory />}/>

                    <Route path="/product" element={<Product />}/>

                    <Route path="*" element={<Dashobord />}/>

                    <Route path="/auth/login" element={<Logout />}/>

                </Routes>
            </section>
        </>
    )
}

export default Content;