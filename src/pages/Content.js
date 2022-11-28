import React from "react";
import { Route, Routes } from "react-router-dom";
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

                </Routes>
            </section>
        </>
    )
}

export default Content;