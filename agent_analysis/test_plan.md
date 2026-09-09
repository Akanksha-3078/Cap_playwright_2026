# PHPTRAVELS website test plan

## Application Overview

This plan focuses on the core user functionality for the public PHPTRAVELS demo travel site: signup, login, flight booking, and logout flows. The goal is to validate the primary customer journey and ensure the key authentication and booking actions behave correctly.

## Test Scenarios

### 1. User signup flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. should allow a new user to create an account

**File:** `agent_analysis/signup.spec.ts`

**Steps:**
  1. Navigate to the signup page from the site entry point.
    - expect: The signup form is visible and ready for input.
    - expect: Required fields such as first name, last name, email, and password are present.
  2. Enter valid signup details for a new user.
    - expect: The form accepts valid input without blocking submission.
    - expect: The user proceeds to the next step or account creation confirmation.
  3. Submit the registration form.
    - expect: The system creates the account successfully.
    - expect: A confirmation message or login redirect is displayed.

#### 1.2. should validate signup form errors

**File:** `agent_analysis/signup-validation.spec.ts`

**Steps:**
  1. Submit the form with empty required fields.
    - expect: Validation errors are shown for the missing fields.
    - expect: The account is not created.
  2. Enter an invalid email format.
    - expect: The system shows an email validation error.
    - expect: The user remains on the signup form.
  3. Use a weak or short password.
    - expect: The system validates the password against the expected rules.
    - expect: Submission is blocked until the password meets the requirement.

### 2. User login flow

#### 2.1. should allow an existing user to log in successfully

**File:** `agent_analysis/login.spec.ts`

**Steps:**
  1. Navigate to the login page.
    - expect: The login form is visible with email and password fields.
  2. Enter valid credentials for an existing account.
    - expect: The credentials are accepted without error.
    - expect: The user is redirected to the authenticated area or dashboard.
  3. Confirm the logged-in state.
    - expect: The user sees account-specific content or navigation changes.
    - expect: The logout option is available.

#### 2.2. should reject invalid login credentials

**File:** `agent_analysis/login-validation.spec.ts`

**Steps:**
  1. Enter an unregistered email or wrong password.
    - expect: An error message is displayed.
    - expect: The user is not logged in.
  2. Leave username or password empty and submit.
    - expect: Required field validation appears.
    - expect: No authentication request is submitted.
  3. Verify the locked or error state remains stable.
    - expect: The form remains usable for retry.
    - expect: No unexpected redirect occurs.

### 3. Flight booking flow

#### 3.1. should search for flights with valid inputs

**File:** `agent_analysis/flight-search.spec.ts`

**Steps:**
  1. Navigate to the flight search section.
    - expect: Origin, destination, departure date, and passenger selection are available.
  2. Provide valid flight search criteria.
    - expect: The form accepts the entries without validation errors.
    - expect: Search results or a flight list is generated.
  3. Review the displayed flight options.
    - expect: Flights include route information, dates, and pricing details.
    - expect: Users can identify a suitable option.

#### 3.2. should validate flight search errors

**File:** `agent_analysis/flight-search-validation.spec.ts`

**Steps:**
  1. Submit the search with a missing required field.
    - expect: A validation message appears.
    - expect: No flight results are shown.
  2. Enter an invalid date combination.
    - expect: The system blocks the search or makes the date issue clear.
    - expect: The user is prompted to correct the input.
  3. Search for unavailable flights or no matching route.
    - expect: A clear no-results or unavailable state is shown.
    - expect: The user can retry or adjust filters.

#### 3.3. should complete the flight booking journey

**File:** `agent_analysis/flight-booking.spec.ts`

**Steps:**
  1. Select a flight from the results list.
    - expect: The user is taken to the booking or checkout step.
    - expect: The selected flight details are visible.
  2. Fill in required traveler and contact information.
    - expect: Required booking fields are validated correctly.
    - expect: The booking form accepts valid input.
  3. Submit the booking request.
    - expect: The system progresses through the booking flow or shows a confirmation.
    - expect: A success or pending confirmation is clearly displayed.

### 4. Logout flow

#### 4.1. should log out an authenticated user successfully

**File:** `agent_analysis/logout.spec.ts`

**Steps:**
  1. Log in with valid credentials.
    - expect: The user is authenticated and sees the account area.
  2. Click the logout option.
    - expect: The session ends successfully.
    - expect: The user is redirected to a logged-out state or login page.
  3. Confirm access is no longer authenticated.
    - expect: Protected pages or account-specific areas require login again.
    - expect: The user can log in again without stale session data.

## Coverage Summary

This plan covers the primary functional scenarios required for the current scope:
- signup validation and success
- login success and invalid credential handling
- flight search and booking flow
- logout success and session termination

These are the highest-priority workflows to automate first for the PHPTRAVELS demo site.
