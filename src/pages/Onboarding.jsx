import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import { isEmail } from "../utils";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";

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
  const [step, setStep] = useState(1);

  const isInfoValid = () => {
    if (step === 4 && isChecked) {
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
                    setStep(1);
                  }}
                >
                  Edit here.
                </a>
              </p>
            )}
            <div className="carousel w-full flex items-center flex-cols">
              {step === 1 && (
                <Step1
                  onChangeHandler={onChangeHandler}
                  userData={userData}
                  setStep={setStep}
                />
              )}
              {step === 2 && (
                <Step2
                  onChangeHandler={onChangeHandler}
                  userData={userData}
                  setStep={setStep}
                />
              )}
              {step === 3 && (
                <Step3
                  onChangeHandler={onChangeHandler}
                  userData={userData}
                  setStep={setStep}
                />
              )}
              {step === 4 && (
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
        <div
          className={`btn btn-xs ${step >= 2 && "bg-green-500"}`}
          onClick={() => {
            setStep(1);
          }}
        >
          1
        </div>
        <div
          onClick={() => {
            if (step > 1) setStep(2);
          }}
          className={`btn btn-xs ${step >= 3 && "bg-green-500"}`}
        >
          2
        </div>
        <div
          onClick={() => {
            if (step > 2) setStep(3);
          }}
          className={`btn btn-xs ${step >= 4 && "bg-green-500"}`}
        >
          3
        </div>
        <div
          onClick={() => {
            if (step > 3) setStep(4);
          }}
          className={`btn btn-xs ${isInfoValid() && "bg-green-500"}`}
        >
          4
        </div>
      </div>
    </>
  );
};

export default Onboarding;
