# Test Cases for PHPTRAVELS Functional Scenarios

## Scope

This document contains detailed functional test cases for the current priority flows identified in the test plan: signup, login, flight search, flight booking, and logout on the public PHPTRAVELS demo website.

| Test ID | Scenario | Preconditions | Steps | Expected Result | Priority | Automation |
|---|---|---|---|---|---|---|
| TC-01 | User can create a new account successfully | User is on the website home page and has no active authenticated session. Signup page is accessible. | 1. Open the signup page. 2. Enter valid first name, last name, email, and password. 3. Click the Sign Up button. | User account is created successfully. A confirmation message or redirect to login page is displayed. The user can proceed to sign in. | P0 | Yes |
| TC-02 | User cannot create account with empty required fields | User is on the signup page. | 1. Leave all required fields blank. 2. Click Sign Up. | Validation errors are displayed for required fields. No account is created. User remains on the signup form. | P0 | Yes |
| TC-03 | User cannot create account with invalid email format | User is on the signup page. | 1. Enter valid personal details. 2. Enter an invalid email format such as abc@ or test.com. 3. Submit the form. | Appropriate email validation error is shown. Form is not submitted. Account is not created. | P1 | Yes |
| TC-04 | User cannot create account with weak password | User is on the signup page. | 1. Enter valid personal details. 2. Enter a weak or too-short password. 3. Submit the form. | System validates password strength according to business rules. Submission is blocked until the password meets requirements. | P1 | Yes |
| TC-05 | Existing user can log in successfully | User has a valid account and is on the login page. | 1. Open the login page. 2. Enter valid email and password. 3. Click Login. | User is authenticated successfully and redirected to the authenticated area or dashboard. Logout option is visible. | P0 | Yes |
| TC-06 | User cannot log in with invalid credentials | User is on the login page and has no valid login session. | 1. Enter an unregistered email or wrong password. 2. Click Login. | Error message is displayed. User remains unauthenticated and cannot access protected areas. | P0 | Yes |
| TC-07 | User cannot log in with empty credentials | User is on the login page. | 1. Leave email or password blank. 2. Attempt login. | Required field validation is shown. No authentication request is submitted. User stays on the login form. | P1 | Yes |
| TC-08 | User can search for flights with valid data | User is on the flight search page and is not logged in unless required by the flow. | 1. Open the flight search section. 2. Select valid origin, destination, date, and passenger details. 3. Click Search. | The system searches successfully and displays matching flight options with route details, dates, and pricing. | P0 | Yes |
| TC-09 | User sees validation errors for missing flight search data | User is on the flight search page. | 1. Leave one or more required fields empty. 2. Click Search. | Validation message appears for missing required inputs. No flight results are shown. | P0 | Yes |
| TC-10 | User sees validation error for invalid flight date selection | User is on the flight search page. | 1. Enter a return or travel date that is invalid or logically incorrect, such as departure after return date. 2. Click Search. | Search is blocked or a clear error message is displayed. User is prompted to correct the date selection. | P1 | Yes |
| TC-11 | User sees no results for unavailable flight route | User is on the flight search page. | 1. Enter a route or date combination with no available flights. 2. Click Search. | System shows a no-results or no availability state with a clear message. User can change criteria and retry. | P1 | Yes |
| TC-12 | User can complete the flight booking flow | User is logged in and has valid flight results. | 1. Select a suitable flight option. 2. Proceed to booking/checkout. 3. Fill in required traveler and contact details. 4. Submit the booking. | Booking progresses successfully and confirmation or booking-status message is displayed. Selected flight details remain consistent through the flow. | P0 | Yes |
| TC-13 | User cannot proceed with booking when required traveler details are missing | User is on the booking form with a selected flight. | 1. Open the booking form. 2. Leave required traveler or contact fields blank. 3. Submit. | Validation errors are displayed. Booking is not submitted until required fields are completed. | P0 | Yes |
| TC-14 | Authenticated user can log out successfully | User is logged in and has an active session. | 1. Click the logout/logout button from the authenticated area. 2. Confirm the logout action. | Session ends successfully. User is redirected to the logged-out state or login page. Protected account pages require login again. | P0 | Yes |
| TC-15 | User cannot access protected session-specific pages after logout | User has logged out successfully. | 1. Attempt to revisit a protected page or account area after logout. 2. Try to access account-specific content. | User is redirected to login or an authentication required page. Old session is not reused. | P1 | Yes |

## Notes

- These test cases are prioritized based on core user journey risk and business impact.
- P0 is highest priority and should be automated first.
- Some flows may depend on demo data or seeded user credentials provided by the application environment.
- The website is a demo environment, so test validation should focus on functional behavior rather than live payment processing.
