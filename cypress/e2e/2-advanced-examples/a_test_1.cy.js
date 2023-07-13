/// <reference types="Cypress" />//
const ELEMENT={
    USER_DATA:{
        EMAIL: 'kofowir295@teasya.com',
        PASSWORD:'123456789',
        MOTHER_NAME:'sopiyo king'
    },
    MAT_DIALOG_CONTAINER:'Dismiss',
    COOKIE_MESSAGE_CLASS:'.cc-btn',
    NAVABAR_ACCOUNT_ID:'#navbarAccount',
    LOGIN_ID:'#navbarLoginButton',
    NEW_USER_CONTAINS:'Not yet a customer?',
    ENTER_EMAIL_ID:'#emailControl',
    ENTER_PASSWORD_ID:'#passwordControl',
    ENTER_REPETPASSWORD_ID:'#repeatPasswordControl',
    SECURITY_QUESTION_CLASS :'.mat-select-placeholder',
    SECURITY_QUESTION_SELECT_ID:'#mat-option-4 > .mat-option-text',
    SECURITY_QUESTION_ANSWER_ID:'#securityAnswerControl',
    REGISTER_BUTTON_ID:'#registerButton',

    }

describe('my first test suite',function()
{
    it('My FirstTest case',function(){
        cy.visit("https://juice-shop.herokuapp.com/#/ ")
        cy.contains(ELEMENT.MAT_DIALOG_CONTAINER) .click()// MAT_DIALOG_CONTAINER
        cy.get(ELEMENT.COOKIE_MESSAGE_CLASS) .click()//COOKIE_MESSAGE_CLASS
        cy.get(ELEMENT.NAVABAR_ACCOUNT_ID).click()//NAVABAR_ACCOUNT_ID
        cy.get(ELEMENT.LOGIN_ID).click()//LOGIN_ID
        cy.contains(ELEMENT.NEW_USER_CONTAINS).click()//NEW_USER_CONTAINS
        cy.get(ELEMENT.ENTER_EMAIL_ID).click().type(ELEMENT.USER_DATA.EMAIL)//ENTER_EMAIL_ID
        cy.get(ELEMENT.ENTER_PASSWORD_ID).click().type(ELEMENT.USER_DATA.PASSWORD)
        cy.get(ELEMENT.ENTER_REPETPASSWORD_ID).click().type(ELEMENT.USER_DATA.PASSWORD)
        cy.get(ELEMENT.SECURITY_QUESTION_CLASS).click().get( ELEMENT.SECURITY_QUESTION_SELECT_ID).click()//SECURITY_QUESTION
        cy.get(ELEMENT.SECURITY_QUESTION_ANSWER_ID).click().type(ELEMENT.USER_DATA.MOTHER_NAME)
        cy.get(ELEMENT.REGISTER_BUTTON_ID).click()
        

    })
})