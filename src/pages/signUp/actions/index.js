import {
    CONTACT_DETAILS,
    CONTACT_SUCCESS,
    CONTACT_FAIL,
    MOBILE_NUMBER_SUCCESS,
    MOBILE_NUMBER_ERROR,
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_ERROR,
    VERIFY_OTP_DATA,
    OTP_VALUE,
    SEND_OTP,
  } from '../../../utils/constant';
  
  export const signupPosts = (posts) => {
    return {
      type: CONTACT_DETAILS,
      payload: posts,
    };
  };
  export const signupPostsSuccess = (posts) => {
    return {
      type: CONTACT_SUCCESS,
      payload: posts,
    };
  };
  export const signupPostsFail = (error) => {
    return {
      type: CONTACT_FAIL,
      payload: error,
    };
  };
  export const otpPostSuccess = (posts) => {
    return {
      type: MOBILE_NUMBER_SUCCESS,
      payload: posts,
    };
  };
  export const otpPostsFail = (error) => {
    return {
      type: MOBILE_NUMBER_ERROR,
      payload: error,
    };
  };
  export const veryfyOtp = (posts) => {
    return {
      type: VERIFY_OTP_DATA,  
      payload: posts,
    };
  };
  export const verifyOtpSuccess = (posts) => {
    return {
      type: VERIFY_OTP_SUCCESS,
      payload: posts,
    };
  };
  export const verifyOtpError = (error) => {
    return {
      type: VERIFY_OTP_ERROR,
      payload: error,
    };
  };
  export const otpValuePost = (otp) => {
    return {
      type: OTP_VALUE,
      payload: otp,
    };
  };
  
  export const sendOTP = (phone) => { 
    return{
      type: SEND_OTP,
      payload: phone
    }
  }