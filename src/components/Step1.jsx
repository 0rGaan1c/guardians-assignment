import React from "react";
import Input from "./Input";
import { isEmail } from "../utils";

const Step1 = ({ onChangeHandler, userData, setStep }) => {
  const isFirstStepDone = () => {
    const { name, email, phoneNumber } = userData;
    if (name && email && phoneNumber && isEmail(email)) {
      return true;
    }
    return false;
  };

  return (
    <div id="item1" className="step-form-div">
      <Input
        type="text"
        placeholder="Name*"
        required={true}
        onChange={onChangeHandler}
        name="name"
        value={userData.name}
      />
      <Input
        type="email"
        placeholder="Email*"
        required={true}
        onChange={onChangeHandler}
        name="email"
        value={userData.email}
      />
      <Input
        type="number"
        placeholder="Phone Number*"
        required={true}
        onChange={onChangeHandler}
        name="phoneNumber"
        value={userData.phoneNumber}
      />
      {isFirstStepDone() && (
        <div
          className="next-btn"
          onClick={() => {
            setStep(2);
          }}
        >
          Next
        </div>
      )}
    </div>
  );
};

export default Step1;
