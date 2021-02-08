import jwt_decode from "jwt-decode";

const getJwtToken = () => {
  try {
    const jwtToken = localStorage.getItem("__token__");
    return jwtToken ? jwt_decode(jwtToken) : {};
  } catch {
    return {};
  }
};

export const getUserName = () => {
  return getJwtToken()["unique_name"] || "Test User";
};
