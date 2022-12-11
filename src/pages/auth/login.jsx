import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import AuthformikControl from "../../components/authForm/authformikControl";
import "./login.css";
import img from "../../image/img-01.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { LoginServices } from "../../services/auth";

const initialValues = {
  phone: "",
  password: "",
  rememberMe: "",
};
const onSubmit = (values , submitMethods , navigate) => {
  try{
    const res = LoginServices(values)
    if(res.status === 200){
      localStorage.setItem('loginToken' , JSON.stringify(res.data))
      navigate('/')
    }else{
      swal("متاسفم", res.data.message, "error");
    }
    submitMethods.setSubmitting(false)
  }catch(error){
    swal("خطا", "اتفاق بدی افتاده است" , "error");
    submitMethods.setSubmitting(false)
  }
};

const validationSchema = Yup.object({
  phone: Yup.number().required("پر کردن این فیلد اجباری است !"),
  password: Yup.string()
    .required("پر کردن این فیلد اجباری است !")
    .min(5, "حداقل 8 کارکتر باید وارد شود !"),
  rememberMe: Yup.string().required("پر کردن این فیلد اجباری است !"),
});

const Login = () => {

  const navigate = useNavigate()
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values , submitMethods)=>onSubmit(values , submitMethods , navigate)}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <>
            {/* <!-- input form --> */}
            <Form className="login100-form validate-form">
              <span className="login100-form-title">ورود به پنل کاربری</span>
              <AuthformikControl
                formik={formik}
                control="input"
                type="phone"
                name="phone"
                icon="fa fa-envelope"
                label="شماره تماس"
              />
              <AuthformikControl
                formik={formik}
                control="input"
                type="password"
                name="password"
                icon="fa fa-lock"
                label="رمز عبور"
              />
              <label className="checkbox ms-3 mt-2 mb-2">
                <FastField type="checkbox" id="rememberMe" name="rememberMe" />{" "}
                مرا به خاطر بسپار
              </label>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn" disabled={formik.isSubmitting}>
                  {
                  formik.isSubmitting ? "لطفا صبر کنید ..." : "ورود"
                  }
                </button>
              </div>
            </Form>

            <div className="login100-pic js-tilt" data-tilt>
              <img src={img} alt="IMG" />
            </div>
          </>
        );
      }}
    </Formik>
  );
};
export default Login;
