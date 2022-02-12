import { getProviders, signIn } from 'next-auth/react';

// interface LoginProps {
//   providers: string;
// }

const Login = () => {
  return <></>;
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
}
