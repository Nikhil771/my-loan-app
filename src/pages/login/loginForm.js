import { useEffect, useReducer, useState } from "react";
import InputTextFields from "../../components/sharedComponent/formFields/inputType";
import { formDataValidate } from "../../components/sharedComponent/validations/formValidations";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { getPhone } from "../../utils/localstorage";
import { CircularProgress } from "@mui/material";

const LoginForm = (props) => {
  const dispatch = useDispatch();

  const [isnotChecked, setCheck] = useState({
    status: false,
    isClicked: false,
  });

  const { errorMessage, loading } = useSelector((state) => state.signUpReducer);
  const navigate = useNavigate();
  const { text } = props;

  useEffect(() => {
    const phone = getPhone();
    if (phone !== "null" && phone !== null) {
      navigate("/");
    }
  }, []);

  const [formData, setFormData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      mobileNumber: {
        value: "",
        fieldName: "Mobile Number",
        errors: {},
        validations: ["required", "validPhone"],
        id: "mobile",
        label: "Mobile Number",
        maxLimit: 10,
      },
      otp: {
        value: "",
        fieldName: "OTP",
        errors: {},
        validations: ["required", "maxLimit", "minLength"],
        maxLimit: 4,
        minLength: 4,
        id: "otp",
        label: "OTP",
      },
    }
  );

  const validate = () => {
    const updatedFields = {};
    const isValid = formDataValidate(formData, updatedFields);
    setFormData(updatedFields);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !validate() ||
      !isnotChecked.status ||
      !onChangePhone(formData.mobileNumber)
    )
      return setCheck({ status: isnotChecked.status, isClicked: true });
    setCheck({ status: true, isClicked: false });

    const payload = {
      phone: formData.mobileNumber.value,
      otp: Number(formData.otp.value),
    };
  };

  const onChangePhone = (e) => {
    const mobileNumber = e;
    let isValid = false;
    if (mobileNumber.value) {
      if (
        !mobileNumber.value.startsWith("6") &&
        !mobileNumber.value.startsWith("7") &&
        !mobileNumber.value.startsWith("8") &&
        !mobileNumber.value.startsWith("9")
      ) {
        mobileNumber.errors = { validPhone: "Invalid phone number" };
        isValid = false;
      } else {
        mobileNumber.errors = {};
        isValid = true;
      }
    }
    setFormData({ mobileNumber });
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="form-custom-design">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 mx-auto mt-4 mobileNumber">
          <InputTextFields
            currentField={formData.mobileNumber}
            onChange={(e) => onChangePhone(e)}
            typeValidate="number"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 mt-4 mx-auto otp">
          <InputTextFields
            currentField={formData.otp}
            onChange={(e) => setFormData({ otp: e })}
            typeValidate="number"
          />
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 mx-auto">
        {errorMessage && (
          <span className="tersmValidaiton validationError">
            {errorMessage}
          </span>
        )}
        <Button
          fullWidth
          className="button"
          variant="outlined"
          type="submit"
          endIcon={loading && <CircularProgress className="btn-loader" />}
          disabled={loading}
        >
          {text ? text : " Verify OTP"}
        </Button>
      </div>
    </form>
  );
};
export default LoginForm;
