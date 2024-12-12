import { Button, TextField } from '@mui/material'
import React from 'react'

export default function SecondStep() {
  return (
    <div  className='bg-slate-100 min-h-[200px] w-[100%] justify-center items-center flex flex-col gap-4 p-4 '>
    <TextField placeholder='شهر'style={{borderRadius:10}} variant='outlined' size='small' label='نام '   />
    <TextField placeholder=' کد پستی ' style={{borderRadius:10}} variant='outlined' size='small' label='  نام  خانوادگی'   />
    <TextField placeholder=' کد غیر پستی ' style={{borderRadius:10}} variant='outlined' size='small' label='ایمیل خود را وارد کنید  '   />
    <Button  variant='contained'>مرحله بعد</Button>

</div>
  )
}