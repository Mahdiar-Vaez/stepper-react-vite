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
    <div className=' bg-blue h-[max-content] w-full lg:w-[80%] justify-center  items-center '>
      <form onSubmit={handleSubmit} className='card flex lg:flex-row gap-4  flex-col'>
        <TextField
          select
          placeholder='شهر'
          className='inputs'
          style={{ borderRadius: 10 }}
          variant='standard'
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
                  className='inputs'

        placeholder='کد پستی'
        style={{ borderRadius: 10 }}
        variant='standard'        size='small'
        label='کد پستی'
        required
        name='postalCode'
        type='number'

        value={fields?.postalCode}
        onChange={handleFields}
      />

      <TextField
        placeholder='کد غیر پستی'
        style={{ borderRadius: 10 }}
        variant='standard'        size='small'
        required
        className='inputs'
          type='number'
        label='کد غیر پستی'
        name='nonPostalCode'
        value={fields?.nonPostalCode}
        onChange={handleFields}
      />
  <div className='flex justify-center  gap-3'>  <Button variant='contained' sx={{width:'100 !important'}} color='success' type='submit'>
          مرحله بعد
        </Button>
        <Button variant='contained' color='error' sx={{width:'100 !important'}} onClick={() => handleStep(1)}>
          مرحله قبل
        </Button></div>
      
      </form>
    </div>
  );
}