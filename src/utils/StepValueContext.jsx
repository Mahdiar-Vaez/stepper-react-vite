import React, { createContext, useState } from "react";

export const GlobalStepContext = createContext();

export default function StepValuesContext({ children }) {
  const [userData, setUserData] = useState([]);
  const handleUserData = (data) => {
    setUserData(...userData,data)
  };
  const [step, setStep] = useState(1);
  const handleStep = (index) => {
    setStep(index);
  };
  const [finalData, setFinalData] = useState();
  const handleFinalData = (data) => {
    setFinalData(data);
  };

  return (
    <GlobalStepContext.Provider
      value={{
        userData,
        handleUserData,
        step,
        handleStep,
        finalData,
        handleFinalData,
      }}
    >
      {children}
    </GlobalStepContext.Provider>
  );
}