import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { GlobalStepContext } from "../../utils/StepValueContext";

export default function FirstStep() {
  const { handleStep,handleUserData ,userData} = useContext(GlobalStepContext);
  const [inputs, setInputs] = useState({
    name: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const handleInputsData = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
console.log(userData)
  const validateForm = () => {
    let newErrors = {};
    if (!inputs.name) {
      newErrors.name = "نام شما میبایست فارسی باشد";
    }
    if (!inputs.lastName) {
      newErrors.lastName = "نام خانوادگی را وارد کنید";
    }
    if (!inputs.email) {
      newErrors.email = "ایمیل خود را وارد کنید";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  console.log(inputs)
  const handleSubmit = () => {
    if (validateForm()) {
      handleUserData(inputs)
      handleStep(2);

    }
  };

  return (
    <div className="bg-slate-100 min-h-[200px] w-[100%] justify-center items-center flex flex-col gap-4 p-4">
      <div className="w-[30%] gap-5 justify-center flex flex-col">
        <TextField
          placeholder="نام خود را وارد کنید"
          className="rounded-md"
          variant="outlined"
          size="small"
          label="نام"
          name="name"
          value={inputs.name}
          onChange={handleInputsData}
          helperText="نام شما میبایست فارسی باشد"
        />
        {errors.name && <span className="text-red-400">{errors.name}</span>}

        <TextField
          placeholder="نام خانوادگی"
          className="rounded-md"
          variant="outlined"
          size="small"
          name="lastName"
          label="نام خانوادگی"
          value={inputs.lastName}
          onChange={handleInputsData}
        />
        {errors.lastName && <span className="text-red-400">{errors.lastName}</span>}

        <TextField
          placeholder="ایمیل"
          className="rounded-md"
          variant="outlined"
          name="email"
          size="small"
          label="ایمیل خود را وارد کنید"
          value={inputs.email}
          onChange={handleInputsData}
        />
        {errors.email && <span className="text-red-400">{errors.email}</span>}

        <div className="flex justify-center">
          <Button
            type="submit"
            sx={{
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
            }}
            fullWidth
            onClick={handleSubmit}
            component={"button"}
            variant="contained"
            className="rounded-full"
          >
            مرحله بعد
          </Button>
        </div>
      </div>
    </div>
  );
}