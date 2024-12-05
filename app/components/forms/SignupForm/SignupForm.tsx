import { Form } from "@remix-run/react";

export default function SignupForm() {
  return (
    <Form action="/signin" method="post" className="login-form">
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          name="full name"
          id="fullName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <input type="text" placeholder="Gender" name="gender" id="gender" />
      </div>
      <div className="form-group">
        <label htmlFor="phone-number">Phone Number</label>
        <input
          type="number"
          placeholder="Phone Number"
          name="phone-number"
          id="phone-number"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email address"
          name="email"
          id="email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          name="password"
          placeholder="New Password"
          id="password"
          required
        />
      </div>
      <button type="submit" className="submit-button">
        Sign Up
      </button>
    </Form>
  );
}
