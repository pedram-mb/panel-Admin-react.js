import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";

const Logout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken"));
    if (loginToken) {
      axios
        .get("https://ecomadminapi.azhadev.ir/api/auth/logout", {
          headers: {
            Authorization: `Bearer${loginToken.token}`,
          },
        })
        .then((res) => {
            if(res.status === 200){
                localStorage.removeItem('loginToken')
                setLoading(false);
            }
            else{
                swal("خطا", res.data.message, "error");
            }
        }).catch(error =>{
            setLoading(false);
            swal("خطا", "از سمت سرور خطایی رخ داده است!", "error");
        })
    }
  }, []);
  return (
    <>
      {loading ? (
        <>
          <h1 className="text-center">شکیبا باشید ...</h1>
        </>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </>
  );
};

export default Logout;
