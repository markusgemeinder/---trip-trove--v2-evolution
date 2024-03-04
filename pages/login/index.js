import { signIn } from "next-auth/react";

export default function LoginPage() {
  async function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signIn("credentials", { redirect: false, email, password });
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Password:</label>
        <input type="password" name="password" required />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}
