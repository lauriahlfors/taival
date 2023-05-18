import { nextAuthOptions } from '@/lib/next-auth-options';
import { getServerSession } from 'next-auth';

export async function getNextAuthSession() {
  const session = await getServerSession(nextAuthOptions);

  if (session) {
    return session.user;
  } else {
    return undefined;
  }
}
