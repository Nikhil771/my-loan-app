import { post } from "../../../service";
import {
  GET_POSTS_URL_PARAM,
  GET_OTP_POSTS_URL_PARAM,
  GET_VERIFY_OTP_POSTS_URL_PARAM,
} from "../../../utils/constant";
import { getPhone } from "../../../utils/localstorage";
import { ErrorMessage, SuccessMessage } from "../../../utils/responseMessage";

export const signUpApiCall = async (data) => {
  try {
    const req = {
      api: process.env.REACT_APP_BASE_V3_API_URL,
      body: data,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await post(GET_POSTS_URL_PARAM, req.body);
    if (response.status === true) {
      return response;
    }
    if (response.status === false) {
      return response;
    }
    return response;
  } catch (e) {
    ErrorMessage({
      message: e,
    });
    return false;
  }
};

export const sendOtpApiCall = async (data) => {
  let postdata = { phone: data || getPhone() };
  try {
    const req = {
      api: process.env.REACT_APP_BASE_V3_API_URL,
      body: postdata,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await post(GET_OTP_POSTS_URL_PARAM, req.body);
    if (response.status === true) {
      return SuccessMessage(response.message);
    }
    if (response.status === false) {
      return await ErrorMessage(response);
    }
    return response;
  } catch (e) {
    ErrorMessage({
      message: e,
    });
    return false;
  }
};

export const verifyOtpApiCall = async (data) => {
  try {
    const req = {
      api: process.env.REACT_APP_BASE_V3_API_URL,
      body: {
        phone: data.phone || getPhone(),
        otp: data.otp,
      },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await post(GET_VERIFY_OTP_POSTS_URL_PARAM, req.body);
    if (response.status === true) {
      return SuccessMessage(response);
    }
    if (response.status === false) {
      return await ErrorMessage(response);
    }
    return response;
  } catch (e) {
    ErrorMessage({
      message: e,
    });
    return false;
  }
};
