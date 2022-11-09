import moment from "moment";

export const handleValidation = (currField, updateErrors = true) => {
  let errorFound = false;
  const fieldValue =
    currField.value && typeof currField.value === "string"
      ? currField.value.trim()
      : currField.value;

  if (!currField.validations || currField.validations.length === 0) {
    return false;
  }

  // check required fields
  if (currField.validations.includes("required")) {
    let requiredError = null;
    if (!fieldValue || fieldValue.length === 0) {
      requiredError = currField.fieldName + " is required";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["required"] = requiredError;
    }
  }

  // check maxLength
  if (currField.validations.includes("maxLength")) {
    let maxLengthError = null;
    if (fieldValue && fieldValue.length > currField.maxLength) {
      maxLengthError =
        currField.fieldName + " maximum length is " + currField.maxLength;
      errorFound = true;
    }

    if (updateErrors) {
      currField.errors["maxLength"] = maxLengthError;
    }
  }

  // check positiveOnly
  if (currField.validations.includes("positiveOnly")) {
    let positiveOnlyError = null;
    if (fieldValue && fieldValue < 1) {
      positiveOnlyError = currField.fieldName + " should be a positive value";
      errorFound = true;
    }

    if (updateErrors) {
      currField.errors["positiveOnly"] = positiveOnlyError;
    }
  }

  // check minLength
  if (currField.validations.includes("minLength")) {
    let minLengthError = null;
    if (fieldValue && (fieldValue.length < currField.minLength || fieldValue<1)) {
      minLengthError =
        `${currField.fieldName}  minimum limit is ${currField.fieldName==="Net Monthly Income"? "1000" : currField.minLength}`;
      errorFound = true;
    }

    if (updateErrors) {
      currField.errors["minLength"] = minLengthError;
    }
  }

  //check email validation
  if (currField.validations.includes("validEmail")) {
    let emailError = null;
    if (!validateEmail(fieldValue)) {
      emailError = "Invalid email format";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["validEmail"] = emailError;
    }
  }

  //check email validation
  if (currField.validations.includes("email")) {
    let emailError = null;
    if (!validateEmail(fieldValue)) {
      emailError = "Invalid email format";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["email"] = emailError;
    }
  }

  //check pan_number validation
  if (currField.validations.includes("pan_number")) {
    let panError = null;
    if (!validatePanNumber(fieldValue)) {
      panError = "Invalid PAN Number format";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["pan_number"] = panError;
    }
  }

  // check maxLimit of array elements
  if (currField.validations.includes("maxLimit")) {
    let maxLimitError = null;
    if (fieldValue && fieldValue.length > currField.maxLimit) {
      maxLimitError = currField.fieldName + " has reached it's maximum ";
      errorFound = true;
    }

    if (updateErrors) {
      currField.errors["maxLimit"] = maxLimitError;
    }
  }

  // check phone number validation
  if (currField.validations.includes("validPhone")) {
    let phoneError = null;
    if (!validatePhone(fieldValue)) {
      phoneError = "Invalid phone number";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["validPhone"] = phoneError;
    }
  }

  // check pincode validation
  if (currField.validations.includes("pin")) {
    let pinError = null;
    if (!validatePin(fieldValue)) {
      pinError = "Invalid pin code";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["pin"] = pinError;
    }
  }

  // check pincode validation
  if (currField.validations.includes("pin")) {
    let pinError = null;
    if (!validatePin(fieldValue)) {
      pinError = "Invalid pin code";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["pin"] = pinError;
    }
  }

  // check time validation
  if (currField.validations.includes("validTime")) {
    let timeError = null;
    if (!validateTime(fieldValue)) {
      timeError = "Invalid time";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["validTime"] = timeError;
    }
  }

  // check date validation
  if (currField.validations.includes("validDate")) {
    let dateError = null;
    if (!validateDate(fieldValue)) {
      dateError = "Invalid Date";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["validDate"] = dateError;
    }
  }

  //check checkbox validation
  if (currField.validations.includes("checkbox")) {
    let checkboxError = null;
    if (!validatecheckbox(fieldValue)) {
      checkboxError = "please click checkbox";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["checkbox"] = checkboxError;
    }
  }

  // check url validation
  if (currField.validations.includes("validUrl")) {
    let urlError = null;
    if (!validateUrl(fieldValue)) {
      urlError = "Invalid url";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["validUrl"] = urlError;
    }
  }

  // check ip validation
  if (currField.validations.includes("validIP")) {
    let ipError = null;
    if (!validateIP(fieldValue)) {
      ipError = "Invalid ip address";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["validIP"] = ipError;
    }
  }

  // check alphaNumeric validation
  if (currField.validations.includes("validAlphaNumeric")) {
    let alphaNumericError = null;
    if (!validateAlphanumeric(fieldValue)) {
      alphaNumericError =
        currField.fieldName + " can not contain special character except '-'";
      errorFound = true;
    }
    if (updateErrors) {
      currField.errors["validAlphaNumeric"] = alphaNumericError;
    }
  }

  return errorFound;
};

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const formDataValidate = (formData, updatedFields) => {
  let isValid = true;

  for (let field in formData) {
    const currField = { ...formData }[field];

    if (
      currField.validations.length === 0 ||
      currField.ignoreValidationOnSubmit
    ) {
      currField.errors = {};
    } else {
      if (handleValidation(currField, updatedFields)) {
        isValid = false;
      }
    }
    if (updatedFields) {
      updatedFields[field] = currField;
    }
  }
  return isValid;
};

export const validatePhone = (phone) => {
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phone.length <= 10) {
    return re.test(phone);
  }
  return true;
};

export const validateTime = (time) => {
  const re = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
  return re.test(time);
};

export const validatePanNumber = (Pan) => {
  const re = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return re.test(Pan);
};

export const validateDate = (date) => {
  const tempDate = moment(date, "DD-MM-YYYY", true);
  return tempDate.isValid();
};

export const validatecheckbox = (checkbox) => {
  if (checkbox) {
    return true;
  }
  return false;
};

export const validateUrl = (url) => {
  const re =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  return re.test(url);
};

export const validateHhMm = (time) => {
  const isValid = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
  return isValid;
};

export const validateIP = (ip) => {
  const re =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  return re.test(ip);
};

export const validateAlphanumeric = (alphanumeric) => {
  const re = /^[0-9a-zA-Z -]+$/;
  return alphanumeric.match(re) ? true : false;
};

export const validatePin = (pin) => {
  const re = /[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3}/;
  return pin.match(re) ? true : false;
};