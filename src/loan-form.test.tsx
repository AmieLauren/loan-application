import React from "react";
import { LoanForm } from "./loan-form";
import { mount } from 'enzyme'
import { TextField } from "@mui/material";

//followed tutorial below as well as some others for setup (since react17 apparently needed enzyme adapter
// and gave me headaches figuring this part out)
//https://www.robinwieruch.de/react-testing-jest-enzyme
//https://www.robinwieruch.de/react-testing-jest 
//npm run test or jest

//Formik is confusing and i think its cause its async that its giving trouble. 


describe("LoanForm", () => {
  it("renders the submit button and button is disabled", async () => {
    //https://jestjs.io/docs/mock-functions 
    const mySpy = jest.fn()
    //empty function but good for when actual ones need to be called; can check if function was supposed to be called.
    const form = mount(<LoanForm setLoanAppData={mySpy} />)


    //Method “props” is meant to be run on 1 node. 5 found instead.
    //not sure the exact reasoning, but this is the closest 'fix' could find. says to use first
    //https://stackoverflow.com/questions/46578430/error-method-props-is-only-meant-to-be-run-on-a-single-node-2-found-instead

    const submitButton = form.find('#submitButton').first();

    expect(submitButton.prop('disabled')).toEqual(true);
  });

  it("has a text field with Email Address", async () => {
    //https://jestjs.io/docs/mock-functions 
    const mySpy = jest.fn()
    const form = mount(<LoanForm setLoanAppData={mySpy} />)

    //tried it with TextField for find first, but then went with ID for rest. Unsure the best approach for testing.
    let emailInput = form.find(TextField).first();
    expect(emailInput.text()).toEqual('Email Address')

  });

  it("has a text field with First Name", async () => {
    //https://jestjs.io/docs/mock-functions 
    const mySpy = jest.fn()
    const form = mount(<LoanForm setLoanAppData={mySpy} />)

    //finding by ID this time; this ALSO got the node error as above. Applying 'first()' trick worked here too.
    let firstNameInput = form.find('#firstName').first();
    expect(firstNameInput.text()).toEqual('First Name');

  });

  it("has a text field with Last Name", async () => {
    //https://jestjs.io/docs/mock-functions 
    const mySpy = jest.fn()
    const form = mount(<LoanForm setLoanAppData={mySpy} />)

    let lastNameInput = form.find('#lastName').first();
    expect(lastNameInput.text()).toEqual('Last Name');

  });

  it("has a text field with Business TIN", async () => {
    //https://jestjs.io/docs/mock-functions 
    const mySpy = jest.fn()
    const form = mount(<LoanForm setLoanAppData={mySpy} />)

    let businessTinInput = form.find('#businessTin').first();
    expect(businessTinInput.text()).toEqual('Business TIN');

  });

  it("has a text field with borrower SSN", async () => {
    //https://jestjs.io/docs/mock-functions 
    const mySpy = jest.fn()
    const form = mount(<LoanForm setLoanAppData={mySpy} />)

    let borrowerSSNInput = form.find('#borrowerSSN').first();
    expect(borrowerSSNInput.text()).toEqual('Borrower SSN');

  });
});
