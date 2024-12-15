import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { GlobalStepContext } from "../../utils/StepValueContext";
import useFormFields from "../../utils/useFields";

export default function FirstStep() {
  const { handleStep, handleUserData, userData } =
    useContext(GlobalStepContext);
  const [fields, handleFields, setFields] = useFormFields();

  useEffect(() => {
    if (userData) {
      setFields(userData);
    }
  }, [userData]);

  console.log(fields);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData && Object.keys(userData).length > 0) {
      // User data is already present, do not overwrite it
      handleUserData({});
    }
    // User data is not present, clear it before setting new data
    handleUserData(fields);

    handleStep(2);
  };

  return (
      <div className=" bg-blue h-[max-content] w-full lg:w-[80%] justify-center  items-center ">
        <form
          onSubmit={handleSubmit}
          className="card flex lg:flex-row gap-4  flex-col "
        >
          <TextField
            className='inputs'
            placeholder="نام خود را وارد کنید"
            variant="filled"
            size="small"
            label="نام"
            required
            name="name"
            value={fields?.name}
            onChange={handleFields}
          />

          <TextField
                      className='inputs'

            placeholder="نام خانوادگی"
            variant="filled"
            size="small"
            name="lastName"
            color="info"
            label="نام خانوادگی"
            required
            value={fields?.lastName}
            onChange={handleFields}
          />

          <TextField
                      className='inputs'

            color="info"
            placeholder="example@gmail.com"
            variant="filled"
            name="email"
            size="small"
            label="ایمیل خود را وارد کنید"
            required
            type="email"
            value={fields?.email}
            onChange={handleFields}
          />

          <div className="flex justify-center self-center lg:w-[30%] w-full">
            <Button
              type="submit"
              size="small"
              sx={{
                backgroundColor: "#00818A",
                color: "white",
                fontSize: "14px",
                fontWeight: "600",
                
                width: "125px",
                "&:hover": {
                  backgroundColor: "#005C69",
                },
                "&:disabled": {
                  backgroundColor: "#999999",
                },
              }}
              fullWidth
              component={"button"}
              variant="contained"
              className="rounded-full"
            >
              مرحله بعد
            </Button>
          </div>
        </form>
      </div>
  );
}
