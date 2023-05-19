'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import TaivalButton from './taival-button';

export default function NextAuthGoogleButton() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <TaivalButton
      onClick={() => {
        setLoading(true), signIn('google');
      }}
      disabled={loading}
    >
      {loading ? (
        <div className="h-4 w-4 animate-spin bg-red-500"></div>
      ) : (
        'Google'
      )}
    </TaivalButton>
  );
}
