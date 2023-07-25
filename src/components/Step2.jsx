import Input from "./Input";
import React from "react";

const Step2 = ({ onChangeHandler, userData, setStep }) => {
  const isSecondStepDone = () => {
    const { allergies, currentMedications, medicalConditions } = userData;
    if (allergies && currentMedications && medicalConditions) {
      return true;
    }
    return false;
  };

  return (
    <div id="item2" className="step-form-div">
      <Input
        type="text"
        placeholder="Allergies*"
        required={true}
        onChange={onChangeHandler}
        name="allergies"
        value={userData.allergies}
      />
      <Input
        type="text"
        placeholder="Current Medications*"
        required={true}
        onChange={onChangeHandler}
        name="currentMedications"
        value={userData.currentMedications}
      />
      <Input
        type="text"
        placeholder="Medical Conditions*"
        required={true}
        onChange={onChangeHandler}
        name="medicalConditions"
        value={userData.medicalConditions}
      />

      {isSecondStepDone() && (
        <div
          // href="#item3"
          className="next-btn"
          onClick={() => {
            setStep(3);
          }}
        >
          Next
        </div>
      )}
    </div>
  );
};

export default Step2;
