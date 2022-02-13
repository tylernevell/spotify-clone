import { getProviders, signIn } from 'next-auth/react';
import { LoginButton } from '../components/login-button/login-button';
import { v4 as uuidv4 } from 'uuid';

interface LoginProps {
  providers: any[];
}

const Login = (props: LoginProps) => {
  const { providers } = props;

  return (
    <section className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      {Object.values(providers).map((provider) => (
        <LoginButton
          key={uuidv4()}
          logo="spotify"
          onClick={() => signIn(provider.id, { callbackUrl: '/' })}
        >
          Login with {provider.name}
        </LoginButton>
      ))}
    </section>
  );
};

export default Login;

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
