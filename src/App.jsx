import React, { useContext, useState } from 'react';
import { Stepper, Step, StepLabel, StepContent, Button, Typography } from '@mui/material';
import FirstStep from './Components/Stepper/FirstStep';
import SecondStep from './Components/Stepper/SecondStep';
import ThirdStep from './Components/Stepper/ThirdStep';
import { GlobalStepContext } from './utils/StepValueContext';

export default function App() {

  const {step}=useContext(GlobalStepContext) 
    function showStep(num) {
    switch(num) {
    case 1 :
    return <FirstStep />
    case 2 :
    return <SecondStep/>
    case 3 :
      return <ThirdStep />
 
    }
  }

  return (

      <div className="App">
      <header className="App-header">
      <h3 className='text-gray-300 bg-slate-700 p-4'>ReactJS Multi Step Application</h3>
      <div className="center-stepper">
      <Stepper style={{width: '18%'}} activeStep={step-1} orientation="horizontal">
    <Step>
      <StepLabel></StepLabel>
      </Step>
      <Step>
      <StepLabel></StepLabel>
      </Step>
      <Step>
       <StepLabel></StepLabel>
      </Step>
      </Stepper>
      </div>
      { showStep(step)}
      </header>
      </div>
  )
}