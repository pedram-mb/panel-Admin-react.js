import axios from "axios";
import React, { useEffect, useState } from "react";
import  {Navigate}  from "react-router-dom";
import { useIsLogin } from "../../hooks/authHook";
import Content from "../../pages/Content";
import Navbar from "./navbar/index";
import Sidebar from "./sidebar/index";

const Index = () => {
  const [login, loading] = useIsLogin();
  return (
    <>
      {loading ? (
        <h1 className="text-center">شکیبا باشید ...</h1>
      ) : login ? (
        <>
          <Navbar /> <Sidebar /> <Content />
        </>

      ) : (
        <Navigate to={"/auth/login"} />
      )}
      {/* <>
        <Navbar /> 
        <Sidebar /> 
        <Content />
      </> */}
    </>
  );
};
export default Index;
