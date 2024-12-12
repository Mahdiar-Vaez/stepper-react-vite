import { Button, TextField } from '@mui/material'
import React from 'react'

export default function ThirdStep() {
  return (
    <div className='bg-slate-950 p-12  flex flex-row gap-4'>
    <TextField placeholder='نام خود را وارد کنید' style={{borderRadius:10}} variant='outlined' size='small' label='نام '   />
    <TextField placeholder=' نام خانوادگی' style={{borderRadius:10}} variant='outlined' size='small' label='  نام  خانوادگی'   />
    <TextField placeholder=' ایمیل  ' style={{borderRadius:10}} variant='outlined' size='small' label='ایمیل خود را وارد کنید  '   />
    <Button  variant='contained'>مرحله بعد</Button>

</div>
  )
}
