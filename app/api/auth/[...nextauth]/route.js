import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "your@email.com" },
        password: { label: "Password (use 'password')", type: "password" }
      },
      async authorize(credentials) {
        if (credentials.email && credentials.password === "password") {
          return { id: "1", name: "Digihub User", email: credentials.email };
        }
        return null;
      }
    })
  ],
  secret: "my-super-secret-key",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
