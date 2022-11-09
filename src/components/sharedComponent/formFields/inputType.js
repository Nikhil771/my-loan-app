import * as React from "react";
import TextField from "@mui/material/TextField";
import { handleValidation } from "../validations/formValidations";
import "./formFields.scss";

const InputTextFields = (props) => {
  const { onChange, currentField, typeValidate, disabled = false, onlyText = false } = props;
  let isValid;
  const invalidValue = ["1","2","3","4","5","6","7","8","9","0","+","-","@","#","$","%","^","&","*","(",")",".",">","<","/","_","=","{","}","|",";",":"]
  const onNumberOnlyChange = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (typeValidate) {
      if (typeValidate === "number") {
        isValid = new RegExp("[0-9]").test(keyValue);
      }
      if (typeValidate === "text") {
        isValid = new RegExp(/^[A-Za-z ]+$/).test(keyValue);
      }
      if (!isValid) {
        event.preventDefault();
        return;
      }
    } else {
      return;
    }
  };
  const onChangeInput = (value) => {
    const currentvalue = { ...currentField };
    if (
      typeValidate === "number" &&
      value.target.value.length > currentvalue.maxLimit 
    )
      return false;
    if(onlyText && value.target.value){
      if(!isNaN(value.target.value)) return false;
      const splitValue = value.target.value.split("");
      const hasInvalidValue = splitValue.some(textValue=>{
        const checkInvalidValue = invalidValue.indexOf(textValue);
        if(checkInvalidValue > -1) return true;
        return false;
      })
      if(hasInvalidValue) return false;
    }; 
    currentvalue.value = value.target.value;
    handleValidation(currentvalue);
    onChange(currentvalue);
  };
  
  const getErrorMessage = () => {
    const errorMsgs = [];
    currentField.validations &&
      currentField.validations.forEach((validation) => {
        if (currentField.errors[validation]) {
          errorMsgs.push(currentField.errors[validation]);
        }
      });
    return errorMsgs.length > 0 ? errorMsgs[0] : null;
  };
  return (
    <div>
      <TextField
        id={currentField?.id}
        label={currentField?.label}
        value={currentField?.value}
        required={
          currentField.validations
            ? currentField.validations &&
              currentField.validations.includes("required")
            : null
        }
        onChange={(e) => onChangeInput(e)}
        onKeyPress={onNumberOnlyChange}
        error={getErrorMessage() ? true : false}
        className={`${currentField?.className} custom-text-input`}
        helperText={getErrorMessage()}
        fullWidth
        variant="outlined"
        type={typeValidate || "text"}
        inputProps={{
          autoComplete: "off",
        }}
        disabled={disabled}
      />
    </div>
  );
};
export default InputTextFields;