import axios from "axios";
import { useEffect, useState } from "react";

export const useIsLogin = () => {
  const [login, setIsLogin] = useState(false);
  const [loading, setIsLoadin] = useState(true);
  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem('loginToken'));

    if (loginToken) {
      axios.get('https://ecomadminapi.azhadev.ir/api/auth/user', {
          headers: {
            'Authorization': `Bearer${loginToken.token}`,
          },
        })
        .then(res => {
          setIsLogin(res.status === 200 ? true : false);
          setIsLoadin(false);
        })
        .catch((e) => {
          localStorage.removeItem("loginToken");
          setIsLogin(false);
          setIsLoadin(false);
        });
    } else {
      setIsLogin(false);
      setIsLoadin(false);
    }
  }, []);

  return[login , loading]
};
