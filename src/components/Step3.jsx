import React from "react";
import Input from "./Input";

const Step3 = ({ onChangeHandler, userData, setStep }) => {
  const isThirdStepDone = () => {
    const { emergencyContact1 } = userData;
    if (emergencyContact1) {
      return true;
    }
    return false;
  };

  return (
    <div id="item3" className="step-form-div">
      <Input
        type="number"
        placeholder="Emergency Contact #1*"
        required={true}
        onChange={onChangeHandler}
        name="emergencyContact1"
        value={userData.emergencyContact1}
      />
      <Input
        type="number"
        placeholder="Emergency Contact #2"
        onChange={onChangeHandler}
        name="emergencyContact2"
        value={userData.emergencyContact2}
      />
      <Input
        type="number"
        placeholder="Emergency Contact #3"
        onChange={onChangeHandler}
        name="emergencyContact3"
        value={userData.emergencyContact3}
      />
      {isThirdStepDone() && (
        <div
          className="next-btn"
          onClick={() => {
            setStep(4);
          }}
        >
          Next
        </div>
      )}
    </div>
  );
};

export default Step3;
