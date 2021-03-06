import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import './loan-form.css';
import Button from '@mui/material/Button'
import { Checkbox, FormControlLabel, TextField, useThemeProps } from "@mui/material";
import * as yup from 'yup';
import { Header } from './form-header';
import { navigateToUrl } from "single-spa";
//
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


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

//struggling with passing form data to other app; looking into pub-sub since it was referenced on single-spa & these articles
//https://www.linkedin.com/pulse/single-spa-authentication-state-management-using-react-rolando-niub%C3%B3/
//Decided to take the 'easier' way out with haveing 'setLoanAppData' and 'getLoanAppData' in root config. Need to ask how it would be handled 
//normally in a professional application.

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  businessTin: string;
  borrowerSSN: string;
  toggle: boolean;
}

interface LoanFormProps {
  setLoanAppData: (values: FormData) => void;
}

export const LoanForm = (props: LoanFormProps): JSX.Element => {


  const submitForm = () => {
    props.setLoanAppData(formik.values);
    navigateToUrl("/success");
  }

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

          <div>
            <Tooltip 
              title={
                  <React.Fragment>
                  <Typography color="inherit">Agree To Terms</Typography>
                  <em>{"Clicking this agrees to all terms and conditions*"}</em>
                </React.Fragment>
              }
            >
              <FormControlLabel control={
                <Checkbox
                  name="toggle"
                  checked={formik.values.toggle}
                  onChange={formik.handleChange}
                  value={formik.values.toggle} />}
                label="Select to Agree"
              />
            </Tooltip>
          </div>

          <Button className="roundButton" variant="contained" id="submitButton" disabled={!(formik.isValid && formik.dirty)}
            onClick={() => submitForm()}>Submit</Button>
        </form>
      </div>

    </>
  );
}
