import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "PASTE_HERE",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "PASTE_HERE",
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || "my-super-secret-key",
  pages: {
    signIn: '/login', // यह NextAuth को बताएगा कि हमारा नया डिज़ाइन किया हुआ लॉगिन पेज इस्तेमाल करना है
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
