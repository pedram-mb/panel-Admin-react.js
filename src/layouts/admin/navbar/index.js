import React from "react";
import CenterContent from "./centerContent";
import LeftContent from "./leftContent";
import RightContent from "./rightContent";

const Navbar = ()=>{
    return(
        <section className="header bg-white fixed-top">
        <div className="container-fluid">
          <div className="row align-items-center p-3">
            
            <RightContent />

            <CenterContent />

            <LeftContent />
          </div>
        </div>
      </section>
    )
}

export default Navbar;