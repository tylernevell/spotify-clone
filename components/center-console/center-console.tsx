import { useSession } from 'next-auth/react';
import { UserBadge } from './user-badge';

const CenterConsole = () => {
  const { data: session } = useSession();

  return (
    <section className="flex-grow text-white">
      <UserBadge
        src={session?.user?.image}
        username={session?.user?.username}
      />
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black from-red-500 h-80 text-white p-8`}
      >
        <h1>hello</h1>
      </section>
    </section>
  );
};

export { CenterConsole };
