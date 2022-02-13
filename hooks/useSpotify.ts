import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import spotifyApi from '../utils/spotify';

const useSpotify = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      // if refresh access token fails, redirect to login
      if (session.user?.error === 'RefreshAccessTokenError') {
        signIn();
      }

      spotifyApi.setAccessToken(session?.user?.accessToken ?? '');
    }
  }, [session]);

  return null;
};

export { useSpotify };
