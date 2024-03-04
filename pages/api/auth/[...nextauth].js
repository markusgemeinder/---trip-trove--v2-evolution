import NextAuth from "next-auth";
import { Email } from "next-auth/providers";

export default NextAuth({
  providers: [
    Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    // Add other providers as needed
  ],
  // Add other configuration options here
});
