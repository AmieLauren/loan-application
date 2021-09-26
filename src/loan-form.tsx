import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import './loan-form.css';
import Button from '@mui/material/Button'
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import * as yup from 'yup';
import { Header } from './form-header';
import { navigateToUrl } from "single-spa";


//states for the button to be greyed out before application is completely filled out. Bless the below link. 
//Praise stackoverflow!
//https://stackoverflow.com/questions/59443005/react-formik-form-validation-how-to-initially-have-submit-button-disabled


//Ended up needing to use 'yup' for validation- it is a schema builder for value parsing and validation
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  firstName: yup
    .string()
    .min(1, 'name should be at least 1 letter long')
    .required('First Name is Required'),
  lastName: yup
    .string()
    .min(1, 'name should be at least 1 letter long')
    .required('First Name is Required'),
  borrowerSSN: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only numbers")
    .min(9, 'must be 9 digits')
    .max(9, 'cant be more than 9')
    .required('SSN is required'),
  businessTin: yup
    .string()
    .matches(/^[9]\d{8}/, "Must start with a 9 and be 9 numbers long")
    .min(9, 'must be 9 digits')
    .max(9, 'cant be more than 9')
    .required('Business TIN is Required'),
});


export const LoanForm = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      businessTin: '', //9 digit number beginning with a '9' (taxpayer id #)
      borrowerSSN: '', //9 digit number
      toggle: false, //toggle to mix things up with input types;  toggle stores a bool here
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });


  const [disabled, setDisabled] = useState(true);

  //header giving trouble- need to get it in head not body for best practice
  return (

    <>
      <div>
        <Header></Header>
      </div>

      <div className={"loanForm"}>
        <form onSubmit={formik.handleSubmit}>



          <TextField
            className='textField'
            variant="filled"
            label="Email Address"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={() => formik.validateForm()}
            value={formik.values.email}
            error={formik.errors.email != undefined}
          />
          {formik.errors.email != undefined && (
            <div>{formik.errors.email}</div>
          )}



          <TextField
            className='textField'
            variant="filled"
            label="First Name"
            id="firstName"
            name="firstName"
            type="firstName"
            onBlur={() => formik.validateForm()}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            error={formik.errors.firstName != undefined}
          />
          {formik.errors.firstName != undefined && (
            <div>{formik.errors.firstName}</div>
          )}

          <TextField
            className='textField'
            variant="filled"
            label="Last Name"
            id="lastName"
            name="lastName"
            type="lastName"
            onBlur={() => formik.validateForm()}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            error={formik.errors.lastName != undefined}
          />
          {formik.errors.lastName != undefined && (
            <div>{formik.errors.lastName}</div>
          )}

          <TextField
            className='textField'
            variant="filled"
            label="Business TIN"
            id="businessTin"
            name="businessTin"
            type="businessTin"
            onBlur={() => formik.validateForm()}
            onChange={formik.handleChange}
            value={formik.values.businessTin}
            error={formik.errors.businessTin != undefined}
          />
          {formik.errors.businessTin != undefined && (
            <div>{formik.errors.businessTin}</div>
          )}

          <TextField
            className='textField'
            variant="filled"
            label="Borrower SSN"
            id="borrowerSSN"
            name="borrowerSSN"
            type="borrowerSSN"
            onBlur={() => formik.validateForm()}
            onChange={formik.handleChange}
            value={formik.values.borrowerSSN}
            error={formik.errors.borrowerSSN != undefined}
          />
          {formik.errors.borrowerSSN != undefined && (
            <div>{formik.errors.borrowerSSN}</div>
          )}



          <FormControlLabel control={
            <Checkbox
              name="toggle"
              checked={formik.values.toggle}
              onChange={formik.handleChange}
              value={formik.values.toggle} />}
            label="Toggle Toggle"
          />

          <Button className="roundButton" variant="contained" disabled={!(formik.isValid && formik.dirty)}
            onClick={() => navigateToUrl("/success")}>Submit (success)</Button>
        </form>
      </div>

    </>
  );
}
