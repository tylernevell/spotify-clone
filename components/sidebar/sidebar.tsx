import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useSpotify } from '../../hooks/useSpotify';
import { SidebarNavigation } from './sidebar-navigation';
import { SidebarPlaylists } from './sidebar-playlists';

const Sidebar = () => {
  const [playlists, setPlayLists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);

  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlayLists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  console.log(playlists);

  return (
    <aside className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen ">
      <SidebarNavigation />
      <SidebarPlaylists />
    </aside>
  );
};

export { Sidebar };
