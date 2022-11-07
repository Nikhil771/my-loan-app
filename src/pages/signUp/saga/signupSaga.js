import { call, put, takeLatest, select } from "redux-saga/effects";
import { CONTACT_DETAILS } from "../../../utils/constant";
// import { signUpApiCall,otpApiCall,verifycaptchaApiCall } from "../services";
import {
  signupPostsFail,
  signupPostsSuccess,
  otpPostSuccess, 
  
} from "../actions";


const stateValue = (state) => state.signUpReducer;

function* onSignupPosts() { 
  try {
    
  } catch (error) {
    yield put(signupPostsFail(error.errors));
  }
}






export default function* signUpSagas() {
  yield takeLatest(CONTACT_DETAILS, onSignupPosts);
 
}
