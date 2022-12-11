import httpService from "./httpService";

export const LoginServices = (values) => {
  return httpService("/auth/login", "post", {
    ...values,
    rememberMe: values.rememberMe ? 1 : 0,
  });
};
