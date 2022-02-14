/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { UserBadge } from './user-badge';
import { shuffle } from 'lodash';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistIdState, playlistState } from '../../atoms/playlist-atom';
import { useSpotify } from '../../hooks/use-spotify';
import { PhotographIcon } from '@heroicons/react/outline';
import { HeartIcon } from '@heroicons/react/solid';
import { SongsList } from '../songs-list.tsx/songs-list';
import { savedTracksState } from '../../atoms/saved-tracks-atom';
import { SavedTracksList } from '../songs-list.tsx/saved-tracks-list';

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
  const [displaySavedTracks, setDisplaySavedTracks] = useState(false);

  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const songList = useRecoilValue(savedTracksState);

  useEffect(() => {
    setColor(shuffle(COLORS).pop()!);
  }, [playlistId]);

  useEffect(() => {
    if (playlistId) {
      spotifyApi
        .getPlaylist(playlistId)
        .then((data) => {
          setDisplaySavedTracks(false);
          setPlaylist(data.body);
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [playlistId, setPlaylist, spotifyApi]);

  useEffect(() => {
    setColor('from-violet-500');
    if (songList) setDisplaySavedTracks(true);
    setPlaylistId(null);
  }, [setPlaylistId, songList]);

  return (
    <section className="flex-grow h-screen overflow-y-scroll scrollbar-hide text-white">
      <UserBadge
        src={session?.user?.image}
        username={session?.user?.username}
      />
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        {playlist?.images?.[0]?.url && !displaySavedTracks ? (
          <img
            src={playlist?.images?.[0]?.url}
            alt=""
            className="h-44 w-44 shadow-2xl"
          />
        ) : (
          <>
            {displaySavedTracks ? (
              <div className="flex flex-col justify-center items-center w-44 h-44 bg-gradient-to-r to-indigo-300 from-indigo-900 shadow-xl">
                <HeartIcon className="w-20 h-20" />
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center w-44 h-44 border-2">
                <PhotographIcon className="w-32 h-32" />
                <p>No Cover</p>
              </div>
            )}
          </>
        )}
        <div>
          <p className="text-sm">PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {playlist?.name && !displaySavedTracks
              ? playlist?.name
              : displaySavedTracks && 'Liked Songs'}
          </h1>
        </div>
      </section>
      {displaySavedTracks ? <SavedTracksList /> : <SongsList />}
    </section>
  );
};

export { CenterConsole };
