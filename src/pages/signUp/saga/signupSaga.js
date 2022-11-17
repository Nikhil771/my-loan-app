import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  CONTACT_DETAILS,
  VERIFY_OTP_DATA,
  SEND_OTP,
} from "../../../utils/constant";
import { signUpApiCall, sendOtpApiCall, verifyOtpApiCall } from "../services";
import {
  signupPostsFail,
  signupPostsSuccess,
  otpPostSuccess,
  verifyOtpSuccess,
  verifyOtpError,
} from "../actions";
import {
  setAuthToken,
  setPhone,
  setOTPVerified,
} from "../../../utils/localstorage";

const stateValue = (state) => state.signUpReducer;

function* onSignupPosts() {
  try {
    const stateName = yield select(stateValue);
    const response = yield call(signUpApiCall, stateName.signUpData);
    console.log('response: ', response);

    if (response && response?.status === true) {
      setPhone(stateName.signUpData.phone);
      yield put(signupPostsSuccess(response));
      setAuthToken(true);
      yield call(sendOtpApiCall, stateName.signUpData.phone);
      yield put(otpPostSuccess(response));
      window.open("/otppage", "_self");
    } else if (response && response?.status === false) {
      if (typeof response?.errors === "object") {
        let errorMessage = "";
        if (response?.errors?.phone) errorMessage = "Invalid phone number";
        else errorMessage = "Something went wrong please try again";
        yield put(signupPostsFail(errorMessage));
      } else yield put(signupPostsFail(response?.errors));
    }
  } catch (error) {
    yield put(signupPostsFail(error.errors));
  }
}

function* onVerifyOtpPost() {
  try {
    const stateName = yield select(stateValue);
    let otpverify = yield call(verifyOtpApiCall, stateName.VerifyOtpData);
    if (otpverify?.status === true) {
      yield put(verifyOtpSuccess(otpverify));
      setOTPVerified(true);
      return window.location.assign(otpverify?.results?.redirect_url);
    } else if (otpverify?.status === false) {
      yield put(verifyOtpError("Enter valid otp"));
    }
  } catch (error) {
    yield put(verifyOtpError("Something went wrong"));
  }
}

function* onSendOTP() {
  try {
    const stateName = yield select(stateValue);
    yield call(sendOtpApiCall, stateName.phone);
  } catch (error) {
    yield put(verifyOtpError(error));
  }
}

export default function* signUpSagas() {
  yield takeLatest(CONTACT_DETAILS, onSignupPosts);
  yield takeLatest(VERIFY_OTP_DATA, onVerifyOtpPost);
  yield takeLatest(SEND_OTP, onSendOTP);
}
