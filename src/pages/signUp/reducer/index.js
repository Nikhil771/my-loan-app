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
  
  const initialState = {  
    message: [],
    signUpData: null,
    otp: new Array(4).fill(""),
    loading: false,
    errorMessage: "",
    phone:"", 
  };
  
  const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case CONTACT_DETAILS:
        state = { ...state, signUpData: action.payload, loading: true, errorMessage: "" };
        break;
      case CONTACT_SUCCESS:
        state = { ...state, lists: action.payload, loading: false, errorMessage: "" };
        break;
      case CONTACT_FAIL:
        state = {
          ...state,
          errorMessage: action.payload,
          loading: false,
        };
        break;
      case MOBILE_NUMBER_SUCCESS:
        state = {
          ...state,
          success: {
            message: action.payload,
          },
          loading: false,
          errorMessage: ""
        };
        break;
      case MOBILE_NUMBER_ERROR:
        state = {
          ...state,
          errorMessage: action.payload,
          loading: false,
        };
        break;
      case VERIFY_OTP_DATA:
        state = { ...state, VerifyOtpData: action.payload, loading: true , errorMessage: ""};
        break;
      case VERIFY_OTP_SUCCESS:
        state = {
          ...state,
          success: {
            message: action.payload,
          },
          loading: false,
          errorMessage: ""
        };
        break;
      case VERIFY_OTP_ERROR:
        state = {
          ...state,
          errorMessage: action.payload,
          loading: false,
        };
        break;
      case OTP_VALUE:
        state = { ...state, otp: action.payload, errorMessage: "" };
        break;
      case SEND_OTP:
        state = { ...state, phone: action.payload, errorMessage: "" };
        break;
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  export default signUpReducer;
  