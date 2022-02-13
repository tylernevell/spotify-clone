/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { UserBadge } from './user-badge';
import { shuffle } from 'lodash';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistIdState, playlistState } from '../../atoms/playlist-atom';
import { useSpotify } from '../../hooks/useSpotify';
import { PhotographIcon } from '@heroicons/react/outline';
import { SongsList } from '../songs-list.tsx/songs-list';

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

  const spotifyApi = useSpotify();

  const [color, setColor] = useState('');

  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    setColor(shuffle(COLORS).pop()!);
  }, [playlistId]);

  useEffect(() => {
    if (playlistId) {
      spotifyApi
        .getPlaylist(playlistId)
        .then((data) => {
          setPlaylist(data.body);
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [playlistId, setPlaylist, spotifyApi]);

  return (
    <section className="flex-grow h-screen overflow-y-scroll scrollbar-hide text-white">
      <UserBadge
        src={session?.user?.image}
        username={session?.user?.username}
      />
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        {playlist?.images?.[0]?.url ? (
          <img
            src={playlist?.images?.[0]?.url}
            alt=""
            className="h-44 w-44 shadow-2xl"
          />
        ) : (
          <div className="flex flex-col justify-center items-center w-44 h-44 border-2">
            <PhotographIcon className="w-32 h-32" />
            <p>No Cover</p>
          </div>
        )}
        <div>
          <p className="text-sm">PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {playlist?.name}
          </h1>
        </div>
      </section>
      <SongsList />
    </section>
  );
};

export { CenterConsole };
