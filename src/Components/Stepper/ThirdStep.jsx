import { Button, TextField, MenuItem } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalStepContext } from '../../utils/StepValueContext';
import useFormFields from '../../utils/useFields';

const cities = ['تهران', 'مشهد', 'کرج', 'شیراز', 'ارومیه', 'قم', 'اصفهان', 'تبریز']; // Replace with your list of cities

export default function SecondStep() {
  const { handleStep, handleUserData, userData,handleFinalData,step } = useContext(GlobalStepContext);
  const [fields, handleFields,setFields] = useFormFields();
  useEffect(() => {
    if (userData) {
      setFields(userData);
    }
  }, [userData]);
 console.log(userData)
  const handleSubmit = (e) => {
    e.preventDefault()
  
      handleUserData(fields);
      handleFinalData(true);} // Assuming the next step is step 3
      console.log("🚀 ~ handleSubmit ~ fields:", fields)
    
  
  console.log("🚀 ~ SecondStep ~ userData:", userData)

  
  return (
    <div className=' bg-blue h-[max-content] w-full lg:w-[80%] justify-center  items-center '>
      <form onSubmit={handleSubmit} className='card flex lg:flex-row gap-4  flex-col '>
      <TextField
        placeholder=' کد تخفیف دارید ؟ وارد کنید '
        style={{ borderRadius: 10 }}
        variant='standard'
        size='small'
        className='inputs'
        onChange={handleFields}
        label='کد تخفیف'
        
        type=''
        name='codedis'
      />
      <TextField
      onChange={handleFields}
        placeholder='شماره کارت بانکی'
        style={{ borderRadius: 10 }}
        variant='standard'
        size='small'
        label='شماره کارت بانکی'
        required
        className='inputs'

        type='number'
        name='creditCardNumber'
      />
      <TextField
      onChange={handleFields}
        placeholder='سریال کارت'
        style={{ borderRadius: 10 }}
        variant='standard'
        size='small'
        className='inputs'

        label='سریال کارت'
        type='number'
        required
        name='creditCardSerial'
      />
  <div className='flex justify-center gap-3'>  <Button sx={{width:'100 !important'}} disabled={step===2?true:false}   variant='contained' color='success'  type='submit'>
ثبت اطلاعات
          </Button>
        <Button variant='contained'  sx={{width:'100 !important'}} onClick={()=>handleStep(2)} color='error'  >
          مرحله قبل
        </Button></div>
      
      </form>
    </div>
  );
}