import React, { useContext, useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,

} from "@mui/material";
import { IoMdPerson } from "react-icons/io";
import { PiNotebookFill } from "react-icons/pi";
import { MdDownloadDone } from "react-icons/md";

import FirstStep from "./Components/Stepper/FirstStep";
import SecondStep from "./Components/Stepper/SecondStep";
import ThirdStep from "./Components/Stepper/ThirdStep";
import { GlobalStepContext } from "./utils/StepValueContext";

export default function App() {
  const { userData, step, finalData } = useContext(GlobalStepContext);
  function showStep(num) {
    switch (num) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  }

  return (
    <div className="App w-screen flex justify-start   flex-col  h-[110vh] md:h-screen  bg-blue-950">
      <button className="btn">
        شمارنده مراحل
      </button>
      <div className=" flex justify-center items-center gap-2 lg:px-12 p-4 lg:py-8">
        <Stepper
          style={{ width: "100%" }}
          activeStep={step - 1}
          orientation="horizontal"
          
        >
         <Step>
            <StepLabel >
              
               <div className="flex items-center"><IoMdPerson fontSize={24} color="white"/>              <p className="text-white p-2 text-lg">اطلاعات شخصی</p>
</div>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
             
            <div className="flex items-center"><PiNotebookFill fontSize={24} color="white"/>              <p className="text-white p-2 text-lg"> آدرس</p>
            </div>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
            
            <div className="flex items-center"><MdDownloadDone fontSize={24} color="white"/>              <p className="text-white p-2 text-lg"> تکمیل</p>
            </div>
            </StepLabel>
          </Step>
        </Stepper>
      </div>
      <div className="flex justify-center items-center w-full px-12 py-16  "> {showStep(step)}</div>

      <div className="h-64 flex justify-center ">
        {finalData && (
           <div className="w-[250px] h-[max-content] sm:w-[500px]   bg-white p-6 shadow-white  rounded-lg shadow-lg text-right">
           <div className="flex flex-col gap-2">
             <p className="text-gray-800 text-lg  font-bold">اطلاعات کاربر</p>
             <p className="text-gray-600 text-lg">نام: {userData.name}</p>
             <p className="text-gray-600 text-lg">نام خانوادگی: {userData.lastName}</p>
             <p className="text-gray-600 text-lg">ایمیل: {userData.email}</p>
             <p className="text-gray-600 text-lg">کد غیر پستی: {userData.nonPostalCode}</p>
             <p className="text-gray-600 text-lg">کد پستی: {userData.postalCode}</p>
             <p className="text-gray-600 text-lg"> شماره سریال کارت : {userData.creditCardSerial}</p>
             <p className="text-gray-600 text-lg">شماره کارت: {userData.creditCardNumber}</p>
           </div>
         </div>
        )}
      </div>
    </div>
  );
}
