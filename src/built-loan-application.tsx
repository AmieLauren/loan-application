import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { LoanForm } from "./loan-form";


//MiniApp1- Form: Basic loan application form that contains at least 5 chances for user interaction. 
//First/last/email 3 required fields. 
// Ideas- business tin; some required fields, some not? toggle buttons/selects for input diversity?
//TIN validator for the npm package part? SSN validator maybe?

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: LoanForm,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
