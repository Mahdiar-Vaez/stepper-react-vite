import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { GlobalStepContext } from "../../utils/StepValueContext";

export default function FirstStep() {
  const { handleUserData, userData, handleStep } = useContext(GlobalStepContext);
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const validateForm = () => {
    let newErrors = {};
    if (!userData.name) {
      newErrors.name = "نام شما میبایست فارسی باشد";
    }
    if (!userData.lastName) {
      newErrors.lastName = "نام خانوادگی را وارد کنید";
    }
    if (!userData.email) {
      newErrors.email = "ایمیل خود را وارد کنید";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleStep(2);
    }
    else{

    }
  };

  return (
    <div className="bg-slate-100 min-h-[200px] w-[100%] justify-center items-center flex flex-col gap-4 p-4">
      
  
      <div className="w-[30%] gap-5 justify-center flex flex-col">

        {" "}
        <TextField
          placeholder="نام خود را وارد کنید"
          className="rounded-md"
          variant="outlined"
          size="small"
          label="نام" 
          name='name'
          onChange={handleUserData}
          helperText='نام شما میبایست فارسی باشد'
          
        />
        {errors.name&&  <span className="text-red-400 ">
                      {errors.name}
  
        </span>}
      
        <TextField
          placeholder="نام خانوادگی"
          className="rounded-md"
          variant="outlined"
          size="small"
          
             name='lastName'
          label="نام خانوادگی"
          onChange={handleUserData}
        />
        {errors.lastName&&  <span className="text-red-400 ">
                      {errors.lastName}
  
        </span>}
        <TextField
          placeholder="ایمیل"
          className="rounded-md"
          variant="outlined"
          name="email"
          size="small"
          
          onChange={handleUserData}
          label="ایمیل خود را وارد کنید"
          
        />
        {errors.email&&  <span className="text-red-400 ">
                      {errors.email}
  
        </span>}
        <div className=" flex justify-center ">
          {" "}
          
          <Button type="submit" sx={{
            backgroundColor: "#00818A",
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            minWidth: "150px",
            "&:hover": {
              backgroundColor: "#005C69",
            },
            "&:disabled": {
              backgroundColor: "#999999",
            },
          }} fullWidth  onClick={(e)=>handleSubmit(e)} component={'button'}  variant="contained"  className="rounded-full">
            مرحله بعد
          </Button>
        </div>
        </div>
    </div>
  );
}
