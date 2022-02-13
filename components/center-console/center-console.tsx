import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { UserBadge } from './user-badge';
import { shuffle } from 'lodash';
import { useRecoilValue } from 'recoil';
import { playlistIdState } from '../../atoms/playlistAtom';

const COLORS = [
  'from-emerald-500',
  'from-fuchsia-500',
  'from-pink-500',
  'from-orange-500',
  'from-sky-500',
  'from-rose-500',
];

const CenterConsole = () => {
  const { data: session } = useSession();

  const [color, setColor] = useState('');
  const playlistId = useRecoilValue(playlistIdState);

  useEffect(() => {
    setColor(shuffle(COLORS).pop()!);
  }, [playlistId]);

  return (
    <section className="flex-grow text-white">
      <UserBadge
        src={session?.user?.image}
        username={session?.user?.username}
      />
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <h1>hello</h1>
      </section>
    </section>
  );
};

export { CenterConsole };
