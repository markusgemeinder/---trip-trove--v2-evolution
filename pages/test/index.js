import { useSession } from "next-auth/react";
import Link from "next/link";

export default function TestPage() {
  const { data: session } = useSession();

  return (
    <>
      <Link href="/">Home</Link>
      <h2>Test Page</h2>
      {session ? (
        <Link href="/test/dashboard">
          <p>Go to Dashboard</p>
        </Link>
      ) : (
        <Link href="/login">
          <p>Please sign in</p>
        </Link>
      )}
    </>
  );
}
