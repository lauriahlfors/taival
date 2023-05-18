import { User } from 'next-auth';
import 'next-auth/jwt';

// Add user id to the JWT return values

type UserId = string;

// Extend the NextAuth JWT interface
declare module 'next-auth/jwt' {
  // Add id to the JWT interface as UserId type
  interface JWT {
    id: UserId;
  }
}

// Extend the NextAuth Session interface
declare module 'next-auth' {
  // Add id property to the Session interface's User property as UserId type
  interface Session {
    user: User & {
      id: UserId;
    };
  }
}
