# Test Data for PHPTRAVELS Functional Scenarios

## 1. Signup Test Data

### Valid Signup Data

```ts
export const validSignupData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe+qa@example.com',
  password: 'Password123!'
};
```

### Invalid Signup Data

```ts
export const invalidSignupData = {
  emptyRequiredFields: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  },
  invalidEmail: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'invalid-email',
    password: 'Password123!'
  },
  weakPassword: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe+weak@example.com',
    password: '12345'
  }
};
```

### Boundary / Edge Values

```ts
export const signupBoundaryData = {
  minNameLength: 'A',
  maxNameLength: 'A'.repeat(50),
  specialCharactersName: 'O\'Neil',
  emailWithPlus: 'test.user+qa@example.com',
  emailWithSubdomain: 'user.name@sub.example.com'
};
```

## 2. Login Test Data

### Valid Login Data

```ts
export const validLoginData = {
  email: 'john.doe+qa@example.com',
  password: 'Password123!'
};
```

### Invalid Login Data

```ts
export const invalidLoginData = {
  wrongPassword: {
    email: 'john.doe+qa@example.com',
    password: 'WrongPassword123!'
  },
  unregisteredEmail: {
    email: 'no.user@example.com',
    password: 'Password123!'
  },
  emptyEmail: {
    email: '',
    password: 'Password123!'
  },
  emptyPassword: {
    email: 'john.doe+qa@example.com',
    password: ''
  }
};
```

## 3. Flight Search Test Data

### Valid Flight Search Data

```ts
export const validFlightSearchData = {
  from: 'New York',
  to: 'London',
  departureDate: '2026-10-15',
  returnDate: '2026-10-20',
  passengers: {
    adults: 1,
    children: 0,
    infants: 0
  }
};
```

### Invalid Flight Search Data

```ts
export const invalidFlightSearchData = {
  missingOrigin: {
    from: '',
    to: 'London',
    departureDate: '2026-10-15',
    returnDate: '2026-10-20',
    passengers: { adults: 1, children: 0, infants: 0 }
  },
  invalidDateOrder: {
    from: 'New York',
    to: 'London',
    departureDate: '2026-10-20',
    returnDate: '2026-10-15',
    passengers: { adults: 1, children: 0, infants: 0 }
  },
  unavailableRoute: {
    from: 'Atlantis',
    to: 'Moon',
    departureDate: '2026-10-15',
    returnDate: '2026-10-20',
    passengers: { adults: 1, children: 0, infants: 0 }
  }
};
```

### Flight Search Boundary Data

```ts
export const flightBoundaryData = {
  sameDayTrip: {
    from: 'New York',
    to: 'London',
    departureDate: '2026-10-15',
    returnDate: '2026-10-15',
    passengers: { adults: 1, children: 0, infants: 0 }
  },
  maxPassengers: {
    from: 'New York',
    to: 'London',
    departureDate: '2026-10-15',
    returnDate: '2026-10-20',
    passengers: { adults: 9, children: 0, infants: 0 }
  }
};
```

## 4. Flight Booking Test Data

### Booking Personal Data

```ts
export const bookingData = {
  firstName: 'Alice',
  lastName: 'Johnson',
  email: 'alice.johnson@example.com',
  phone: '+1-555-123-4567',
  travelers: {
    title: 'Ms',
    firstName: 'Alice',
    lastName: 'Johnson'
  }
};
```

### Missing Booking Data

```ts
export const missingBookingData = {
  emptyTravelerFirstName: {
    firstName: '',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    phone: '+1-555-123-4567'
  },
  emptyEmail: {
    firstName: 'Alice',
    lastName: 'Johnson',
    email: '',
    phone: '+1-555-123-4567'
  }
};
```

## 5. Logout Test Data

### Logged-in Session Data

```ts
export const logoutData = {
  validEmail: 'john.doe+qa@example.com',
  validPassword: 'Password123!'
};
```

## 6. General Data Notes

- Use unique email addresses for each signup test to avoid account collision.
- Keep the password format consistent with the site validation rule, for example: `Password123!`.
- Use future dates for flight search tests so the travel dates are valid and not expired.
- For demo-site testing, prefer seeded or created accounts in the app environment rather than relying on real production data.
- The test data should be stored separately from test logic and reused across Playwright specs.
