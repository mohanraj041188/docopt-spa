import { Form } from "@remix-run/react";

export default function LoginForm() {
  return (
    <Form action="/signin" method="post" className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email address / Mobile Number</label>
        <input
          type="email"
          placeholder="Email address / Mobile Number"
          name="email"
          id="email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          required
        />
      </div>
      <button type="submit" className="submit-button">
        Login
      </button>
    </Form>
  );
}
