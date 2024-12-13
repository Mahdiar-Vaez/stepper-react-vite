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
    <div className=" p-4  flex justify-center ">
      <div className=" h-64 w-full lg:w-[70%] bg-blue-300 rounded-xl   justify-center items-center flex flex-col gap-4 p-4 ">
        <form
          onSubmit={handleSubmit}
          className="px-4 m-2  w-full sm:w-[80%]   gap-5 justify-center flex  flex-col"
        >
          <TextField
            placeholder="نام خود را وارد کنید"
            className="rounded-md"
            variant="filled"
            size="small"
            label="نام"
            required
            name="name"
            value={fields?.name}
            onChange={handleFields}
          />

          <TextField
            placeholder="نام خانوادگی"
            className="rounded-md"
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
            color="info"
            placeholder="example@gmail.com"
            className="rounded-md"
            variant="filled"
            name="email"
            size="small"
            label="ایمیل خود را وارد کنید"
            required
            type="email"
            value={fields?.email}
            onChange={handleFields}
          />

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
              component={"button"}
              variant="contained"
              className="rounded-full"
            >
              مرحله بعد
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
