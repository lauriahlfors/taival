import NextAuthGitHubButton from '@/components/next-auth-github-button';
import NextAuthGoogleButton from '@/components/next-auth-google-button';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center gap-12 ">
      <div>
        <p className="text-slate-200">Sign up to Taival!</p>
      </div>

      <div className="flex flex-col gap-3">
        <NextAuthGitHubButton />
        <NextAuthGoogleButton />
      </div>

      <hr className="mt-2 h-px w-[320px] border-0 bg-slate-700" />

      <div className="flex flex-col items-center justify-center">
        <p>Already have an account?</p>
        <p className="text-slate-200">
          <Link href={'/signin'} className="text-blue-600">
            Sign in
          </Link>{' '}
          instead!
        </p>
      </div>
    </div>
  );
}
