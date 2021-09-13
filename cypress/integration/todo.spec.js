/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

import React from 'react';
import { mount } from '@cypress/react';
import App from '../../src/App';
import {useState} from "react";

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/VISA_ContactList')
  })
})

it('has initial contact array', () => {
  mount(<App />);
  cy.visit('http://localhost:3000/VISA_ContactList');
  cy.get('[contacts, setContacts]').should('exist');
})

it('contains the correct number of contacts', () => {
  const [contacts, setContacts] = useState(
    [
        {
            id: 1,
            fName:"Alyssa",
            lName:"Blanco",
            num:"(813)480-2369",
            email:"alyssakblanco@outlook.com"
        },
        {
            id: 2,
            fName:"Peter",
            lName:"Parker",
            num:"(555)123-9876",
            email:"notspiderman@outlook.com"
        },
        {
            id: 3,
            fName:"Elon",
            lName:"Musk",
            num:"(555)321-6789",
            email:"rocketman@outlook.com"
        }
    ] 
  )

  mount(<App />)

  cy.get('[data-testid=contacts]').should('have.length', contacts.length)
})