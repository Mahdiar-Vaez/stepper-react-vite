import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { GlobalStepContext } from '../../utils/StepValueContext';
import useFormFields from '../../utils/useFields';

export default function SecondStep() {
  const { handleStep, handleUserData, userData } = useContext(GlobalStepContext);
  const [fields, handleFields] = useFormFields();
  const [errors, setErrors] = useState({
    city: '',
    postalCode: '',
    nonPostalCode: '',
  });

  const validateForm = () => {
    let newErrors = {};
    if (!fields?.city) {
      newErrors.city = 'شهر را وارد کنید';
    }
    if (!fields?.postalCode) {
      newErrors.postalCode = 'کد پستی را وارد کنید';
    }
    if (!fields?.nonPostalCode) {
      newErrors.nonPostalCode = 'کد غیر پستی را وارد کنید';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleUserData(fields);
      handleStep(3); // Assuming the next step is step 3
    }
  };

  return (
    <div className='bg-slate-100 min-h-[200px] w-[100%] justify-center items-center flex  gap-4 p-4'>
      <div className='flex flex-col gap-4 w-[30%]'>
      <TextField
        placeholder='شهر'
        style={{ borderRadius: 10 }}
        variant='outlined'
        size='small'
        label='شهر'
        name='city'
        value={fields?.city}
        onChange={handleFields}
      />
      {errors.city && <span className='text-red-400'>{errors.city}</span>}

      <TextField
        placeholder='کد پستی'
        style={{ borderRadius: 10 }}
        variant='outlined'
        size='small'
        label='کد پستی'
        name='postalCode'
        value={fields?.postalCode}
        onChange={handleFields}
      />
      {errors.postalCode && <span className='text-red-400'>{errors.postalCode}</span>}

      <TextField
        placeholder='کد غیر پستی'
        style={{ borderRadius: 10 }}
        variant='outlined'
        size='small'
        label='کد غیر پستی'
        name='nonPostalCode'
        value={fields?.nonPostalCode}
        onChange={handleFields}
      />
      {errors.nonPostalCode && <span className='text-red-400'>{errors.nonPostalCode}</span>}

      <Button variant='contained' onClick={handleSubmit}>
        مرحله بعد
      </Button>
      <Button variant='contained' onClick={() => handleStep(1)}>
        مرحله قبل
      </Button></div>
    </div>
  );
}