import axios from "axios";
import config from "./config.json";

const httpService = (url , methods , data=null)=>{
    const tokenInfo = JSON.parse(localStorage.getItem('loginToken'))
    return axios({
        url : config.onlineApi+url,
        methods,
        data,
        headers : {
            Authorization : tokenInfo ? `Bearer ${tokenInfo.token}` : null,
            "content-type" : "application/json",
        }
    })
}

export default httpService;