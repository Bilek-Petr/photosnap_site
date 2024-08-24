import React, { useState } from "react";
import ThankYou from "./ThankYou";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function InviteForm() {
  const [isSent, setIsSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    //Validate form
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Name can't be more than 20 characters long")
        .required("First name is required"),
      lastName: Yup.string()
        .max(20, "Name can't be more than 20 characters long")
        .required("Last name is required"),
      email: Yup.string()
        .max(30, "Max email length is 30 characters")
        .required("Email is required")
        .email("Invalid email address"),
    }),

    //Submit form
    onSubmit: (values) => {
      console.log(values);
      setIsSent(true);
    },
  });

  const inputStyles =
    "border-[1px] border-slate-300 p-2 text-slate-500 rounded ";

  return (
    <div className="flex h-[100svh] flex-col md:flex-row">
      <div className="relative w-full md:w-1/2">
        <img
          src="svgs/bgForm.svg"
          alt="Background"
          className="h-[30rem] w-full object-cover md:h-full"
        />
        <div className="absolute inset-0 m-auto flex h-2/3 w-9/12 flex-col items-center justify-center rounded text-center backdrop-blur-[2px]">
          <p className="pb-6 text-5xl font-bold">Invite only right now.</p>
          <p className="text-2xl">Over 10k people have joined our network.</p>
          <p className="text-2xl">We invite you to join the tribe</p>
        </div>
      </div>

      <div className="align-center flex w-full justify-center py-[6rem] md:w-1/2">
        {!isSent ? (
          <form
            onSubmit={formik.handleSubmit}
            className="align-center s:w-8/12 flex w-10/12 flex-col justify-center space-y-4"
          >
            <label
              className={`tracking-wide ${formik.touched.firstName && formik.errors.firstName ? "font-medium text-red-400" : "font-bold"}`}
              htmlFor="firstName"
            >
              {formik.touched.firstName && formik.errors.firstName
                ? formik.errors.firstName
                : "First Name"}
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className={inputStyles}
              placeholder="Enter first name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <label
              className={`tracking-wide ${formik.touched.lastName && formik.errors.lastName ? "font-medium text-red-400" : "font-bold"}`}
              htmlFor="lastName"
            >
              {formik.touched.lastName && formik.errors.lastName
                ? formik.errors.lastName
                : "Last Name"}
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={inputStyles}
              placeholder="Enter last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <label
              className={`tracking-wide ${formik.touched.email && formik.errors.email ? "font-medium text-red-400" : "font-bold"}`}
              htmlFor="email"
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Email"}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={inputStyles}
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-br from-pink-500 to-purple-400 px-5 py-2.5 text-center font-bold text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-pink-200 dark:focus:ring-purple-400"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <ThankYou />
        )}
      </div>
    </div>
  );
}
