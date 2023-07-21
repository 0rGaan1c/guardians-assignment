import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import { isEmail } from "../utils";

const Onboarding = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    allergies: "",
    currentMedications: "",
    medicalConditions: "",
    emergencyContact1: "",
    emergencyContact2: "",
    emergencyContact3: "",
  });
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const isFirstStepDone = () => {
    const { name, email, phoneNumber } = userData;
    if (name && email && phoneNumber && isEmail(email)) {
      return true;
    }
    return false;
  };

  const isSecondStepDone = () => {
    const { allergies, currentMedications, medicalConditions } = userData;
    if (
      isFirstStepDone() &&
      allergies &&
      currentMedications &&
      medicalConditions
    ) {
      return true;
    }
    return false;
  };

  const isThirdStepDone = () => {
    const { emergencyContact1 } = userData;
    if (isSecondStepDone() && emergencyContact1) {
      return true;
    }
    return false;
  };

  const isInfoValid = () => {
    if (isThirdStepDone && isChecked) {
      return true;
    }

    return false;
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      if (!isEmail(value)) {
        setError("Email is not valid.");
      } else {
        setError("");
      }
    }

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const [isInfoSaved, setIsInfoSaved] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isInfoValid()) {
      setIsInfoSaved(
        "Info has been saved, you can edit the information by clicking on"
      );
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="mt-10 md:mt-20 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
          <p>Please fill the form below.</p>
          <div className="border-2 border-gray-200 p-4 rounded-md mt-4 h-[55vh] flex flex-col justify-center">
            {error && <p className="text-sm text-red-500">{error}</p>}
            {isInfoSaved && (
              <p className="text-sm text-green-500">
                {isInfoSaved}
                <br />
                <a
                  className="text-sm font-medium text-blue-500 cursor-pointer"
                  href="#item1"
                  onClick={() => {
                    setIsInfoSaved("");
                    setIsChecked(false);
                  }}
                >
                  Edit here.
                </a>
              </p>
            )}
            <div className="carousel w-full flex items-center flex-cols">
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
                  <a href="#item2" className="next-btn">
                    Next
                  </a>
                )}
              </div>
              {isFirstStepDone() && (
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
                    <a href="#item3" className="next-btn">
                      Next
                    </a>
                  )}
                </div>
              )}
              {isSecondStepDone() && (
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
                    <a href="#item4" className="next-btn">
                      Next
                    </a>
                  )}
                </div>
              )}
              {isThirdStepDone() && (
                <div id="item4" className="step-form-div mt-2">
                  {Object.entries(userData).map(([key, value]) => {
                    return (
                      <p key={key}>
                        <span className="text-gray-400 uppercase">{key}</span>:
                        <span className="ml-1">{value}</span>
                      </p>
                    );
                  })}
                  <div className="flex justify-between mt-4">
                    <div>
                      <input
                        type="checkbox"
                        id="check-review"
                        checked={isChecked}
                        onChange={(e) => {
                          setIsChecked(!isChecked);
                        }}
                      />
                      <label className="text-sm ml-1" htmlFor="check-review">
                        Review and confirm the information
                      </label>
                    </div>
                    <button
                      className={`btn btn-success btn-sm`}
                      type="submit"
                      disabled={isInfoValid() ? "" : "disabled"}
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-center w-full py-3 gap-2">
        <a
          href="#item1"
          className={`btn btn-xs ${isFirstStepDone() && "bg-green-500"}`}
        >
          1
        </a>
        <a
          href={`${isFirstStepDone() ? "#item2" : "#item1"}`}
          className={`btn btn-xs ${isSecondStepDone() && "bg-green-500"}`}
          disabled={isFirstStepDone() ? "" : "disabled"}
        >
          2
        </a>
        <a
          href={`${isSecondStepDone() ? "#item3" : "#item2"}`}
          className={`btn btn-xs ${isThirdStepDone() && "bg-green-500"}`}
          disabled={isSecondStepDone() ? "" : "disabled"}
        >
          3
        </a>
        <a
          href={`${isThirdStepDone() ? "#item4" : "#item3"}`}
          // href="#item4"
          className={`btn btn-xs ${isInfoValid() && "bg-green-500"}`}
          disabled={isThirdStepDone() ? "" : "disabled"}
        >
          4
        </a>
      </div>
    </>
  );
};

export default Onboarding;
