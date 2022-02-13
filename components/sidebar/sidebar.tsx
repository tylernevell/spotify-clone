import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { playlistIdState } from '../../atoms/playlist-atom';
import { useSpotify } from '../../hooks/useSpotify';
import { SidebarNavigation } from './sidebar-navigation';

const Sidebar = () => {
  const [playlists, setPlayLists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlayLists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <aside className="text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex md:flex-wrap">
      <SidebarNavigation />
      <section className="space-y-4">
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className="cursor-pointer hover:text-white"
          >
            {playlist.name}
          </p>
        ))}
      </section>
    </aside>
  );
};

export { Sidebar };
