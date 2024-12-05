// routes/login.jsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSession } from "~/utlis/session.server";

export const loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const user = session.get("user");
  if (!user) {
    return json({ isLoggedIn: false, user: null });
  }
  return json({ isLoggedIn: true, user });
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  // Replace this with your authentication logic
  if (email === "test@example.com" && password === "12345") {
    const session = await getSession();
    session.set("user", { name: "John Doe", email });

    return json(
      { success: true },
      {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      }
    );
  }

  return json({ success: false, error: "Invalid credentials" });
};

export default function LoginPage() {
  const { isLoggedIn, user } = useLoaderData();
  if (!isLoggedIn) {
    return <p>You are not logged in. Please log in to continue.</p>;
  }
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
