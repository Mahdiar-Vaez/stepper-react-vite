import { Button, TextField, MenuItem } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalStepContext } from '../../utils/StepValueContext';
import useFormFields from '../../utils/useFields';

const cities = ['تهران', 'مشهد', 'کرج', 'شیراز', 'ارومیه', 'قم', 'اصفهان', 'تبریز']; // Replace with your list of cities

export default function SecondStep() {
  const { handleStep, handleUserData, userData } = useContext(GlobalStepContext);
  const [fields, handleFields,setFields] = useFormFields();
  useEffect(() => {
    if (userData) {
      setFields(userData);
    }
  }, [userData]);
 
  const handleSubmit = (e) => {
    e.preventDefault()
  
      handleUserData(fields);
      handleStep(3);} // Assuming the next step is step 3
      console.log("🚀 ~ handleSubmit ~ fields:", fields)
    
  
  console.log("🚀 ~ SecondStep ~ userData:", userData)

  
  return (
    <div className='bg-slate-100 h-[400px] w-[100%] justify-center items-center flex  gap-4 p-4'>
      <form onSubmit={handleSubmit} className='flex px-4 py-14 flex-col gap-4 lg:w-[50%] w-[100%]'>
        <TextField
          select
          placeholder='شهر'
          style={{ borderRadius: 10 }}
          variant='outlined'
          size='small'
          label='شهر'
          name='city'
          required
          value={fields?.city}
          onChange={handleFields}
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </TextField>

        <TextField
        placeholder='کد پستی'
        style={{ borderRadius: 10 }}
        variant='outlined'
        size='small'
        label='کد پستی'
        required
        name='postalCode'
        value={fields?.postalCode}
        onChange={handleFields}
      />

      <TextField
        placeholder='کد غیر پستی'
        style={{ borderRadius: 10 }}
        variant='outlined'
        size='small'
        required
        label='کد غیر پستی'
        name='nonPostalCode'
        value={fields?.nonPostalCode}
        onChange={handleFields}
      />
  <div className='flex justify-center gap-3'>  <Button variant='contained' color='success' type='submit'>
          مرحله بعد
        </Button>
        <Button variant='contained' color='error' onClick={() => handleStep(1)}>
          مرحله قبل
        </Button></div>
      
      </form>
    </div>
  );
}