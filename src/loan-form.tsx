import { useFormik } from "formik";
import React, { useEffect } from "react";
import './loan-form.css';
import Button from '@mui/material/Button'

//can make more components and use here in loan form like 'normal'
//typecast jsx.element here ; make sure to typecast

export const LoanForm = (): JSX.Element => {
//businessTin - 9 numbers, for
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      businessTin: '', //9 digit number beginning with a '9' (taxpayer id #)
      borrowerSSN: '', //9 digit number
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  //to watch for changes in formik - commented out for now since wont need till later if i use
  // useEffect(() => {
  //   console.log(formik);
  // }, [formik])

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

    <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

    <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

    <label htmlFor="businessTin">Business TIN</label>
        <input
          id="businessTin"
          name="businessTin"
          type="businessTin"
          onChange={formik.handleChange}
          value={formik.values.businessTin}
        />

    <label htmlFor="borrowerSSN">Borrower SSN</label>
        <input
          id="borrowerSSN"
          name="borrowerSSN"
          type="borrowerSSN"
          onChange={formik.handleChange}
          value={formik.values.borrowerSSN}
        />
        
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  );
}
