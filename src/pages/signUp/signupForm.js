import { useEffect, useReducer, useState } from "react";
import InputTextFields from "../../components/sharedComponent/formFields/inputType";
import { formDataValidate } from "../../components/sharedComponent/validations/formValidations";
import { signupPosts, signupPostsFail } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { getPhone } from "../../utils/localstorage";
import { CircularProgress } from "@mui/material";

const SignUpForm = (props) => {
  const dispatch = useDispatch();

  const [isnotChecked, setCheck] = useState({
    status: false,
    isClicked: false,
  });

  const { errorMessage, loading } = useSelector((state) => state.signUpReducer);
  const navigate = useNavigate();
  const { text, isRecaptchaRequired } = props;

  useEffect(() => {
    const phone = getPhone();
    if (phone !== "null" && phone !== null) {
      navigate("/");
    }
  }, []);

  const [formData, setFormData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: {
        value: "",
        fieldName: "Name",
        errors: {},
        id: "name",
        label: "Name (As per ID Proof)",
        validations: ["required"],
      },
      mobileNumber: {
        value: "",
        fieldName: "Mobile Number",
        errors: {},
        validations: ["required", "validPhone"],
        id: "mobile",
        label: "Mobile Number",
        maxLimit: 10,
      },
      salary: {
        value: "",
        fieldName: "Net Monthly Income",
        errors: {},
        validations: ["required", "maxLimit", "minLength"],
        maxLimit: 9,
        minLength: 4,
        id: "salary",
        label: "Net Monthly Income",
      },
      pin: {
        value: "",
        fieldName: "Pincode",
        errors: {},
        validations: ["required", "pin"],
        id: "pin",
        label: "Pincode",
        maxLimit: 6,
      },

      is_whatsapp: {
        value: 0,
        fieldName: "is_whatsapp",
        errors: {},
        validations: [],
        id: "is_whatsapp",
        label: "is_whatsapp",
      },
    }
  );

  const HandleCheckbox = (e) => {
    setCheck({ status: e.currentTarget.checked, isClicked: true });
  };

  const whatsApp = (e) => {
    const isWhatsapp = { ...formData.is_whatsapp };
    isWhatsapp.value = e.target.checked ? 1 : 0;
    setFormData({ is_whatsapp: isWhatsapp });
  };

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
      first_name: formData.name.value,
      phone: formData.mobileNumber.value,
      salary: Number(formData.salary.value),
      pin_code: Number(formData.pin.value),
      isRecaptchaRequired: isRecaptchaRequired,
      is_whatsapp: formData.is_whatsapp.value,
    };
    dispatch(signupPosts(payload));
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
        <div className="col-sm-12 col-md-6 col-lg-6 fullName">
          <InputTextFields
            currentField={formData.name}
            onChange={(e) => setFormData({ name: e })}
            typeValidate="text"
            onlyText={true}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6  mt-lg-0 mt-md-0 mt-4 mobileNumber">
          <InputTextFields
            currentField={formData.mobileNumber}
            onChange={(e) => onChangePhone(e)}
            typeValidate="number"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 mt-4 salary">
          <InputTextFields
            currentField={formData.salary}
            onChange={(e) => setFormData({ salary: e })}
            typeValidate="number"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mt-4 pin">
          <InputTextFields
            currentField={formData.pin}
            onChange={(e) => setFormData({ pin: e })}
            typeValidate="number"
            placeholder="x"
          />
        </div>
      </div>
      <div className="col-sm-12">
        <div className="referral-code">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Receive offers and notifications on WhatsApp"
              onChange={whatsApp}
            />
          </FormGroup>
        </div>
        <div className="terms-and-conditions">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox id="checkTC" onChange={(e) => HandleCheckbox(e)} />
              }
              label={
                <label
                  className="form-check-label text-justify custm-font"
                  for="terms"
                >
                  I have read and agreed to the&nbsp;
                  <a
                    href="https"
                    target="_blank"
                    className="text-blue font-weight-custom"
                    rel="noreferrer"
                  >
                    End User License Agreement
                  </a>
                  ,&nbsp;
                  <a
                    href="https"
                    target="_blank"
                    className="text-blue font-weight-custom"
                    rel="noreferrer"
                  >
                    Privacy Policy (EQX)
                  </a>
                  ,&nbsp;
                  <a
                    href="https"
                    target="_blank"
                    className="text-blue font-weight-custom"
                    rel="noreferrer"
                  >
                    Privacy Policy (AKARA)
                  </a>
                  ,&nbsp;
                  <a
                    href="https"
                    target="_blank"
                    className="text-blue font-weight-custom"
                    rel="noreferrer"
                  >
                    Fair Practice Code
                  </a>
                  ,&nbsp;
                  <a
                    href="https"
                    target="_blank"
                    className="text-blue font-weight-custom"
                    rel="noreferrer"
                  >
                    Being Platform General Terms and Conditions
                  </a>
                  ,&nbsp;
                  <a
                    href="https"
                    target="_blank"
                    className="text-blue font-weight-custom"
                    rel="noreferrer"
                  >
                    Platform Declaration
                  </a>
                  ,&nbsp;
                  <a
                    href="https"
                    target="_blank"
                    className="text-blue font-weight-custom"
                    rel="noreferrer"
                  >
                    User Consent For KYC
                  </a>
                  ,
                  <a
                    href="https"
                    target="_blank"
                    className="text-blue font-weight-custom"
                    rel="noreferrer"
                  >
                    &nbsp;Credit Line General Terms and Conditions&nbsp;
                  </a>
                  and &nbsp;
                  <a
                    href="https"
                    target="_blank"
                    className="text-blue font-weight-custom"
                    rel="noreferrer"
                  >
                    Other Terms and Conditions &nbsp;
                  </a>
                  on the Being App/Website
                </label>
              }
            />
          </FormGroup>
          <div className="mt-1">
            {!isnotChecked.status && isnotChecked.isClicked && (
              <span className="tersmValidaiton validationError">
                Please check terms and conditions
              </span>
            )}
          </div>
        </div>
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
          {text ? text : " Verify my number"}
        </Button>
      </div>
    </form>
  );
};
export default SignUpForm;
