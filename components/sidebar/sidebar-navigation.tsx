import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  savedTracksSizeState,
  savedTracksState,
} from '../../atoms/saved-tracks-atom';
import { useSpotify } from '../../hooks/use-spotify';
import { SidebarButton } from './sidebar-button';

const SidebarNavigation = () => {
  const spotifyApi = useSpotify();
  const [listLength, setListLength] = useRecoilState(savedTracksSizeState);
  const [songList, setSongList] = useRecoilState(savedTracksState);
  const getLikedSongsHandler = () => {
    spotifyApi
      .getMySavedTracks({
        limit: 50,
        offset: 0,
      })
      .then(
        function (data) {
          setListLength(data.body.total);
          setSongList(data.body.items);
        },
        function (err) {
          console.log('Something went wrong!', err);
        }
      );
    // if (listLength) {
    //   const numOfOffsets = Math.floor(listLength / 50);
    //   for (let i = 1; i < numOfOffsets; i += 1) {
    //     spotifyApi
    //       .getMySavedTracks({
    //         limit: 50,
    //         offset: i * 50,
    //       })
    //       .then(
    //         function (data) {
    //           setSongList((list) => [...list, data.body.items]);
    //         },
    //         function (err) {
    //           console.log('Something went wrong!', err);
    //         }
    //       );
    //   }
    // }
  };

  return (
    <section className="space-y-4 mb-4">
      <SidebarButton onClick={() => signOut()}>
        <LogoutIcon className="h-5 w-5" />
        <p>Log Out</p>
      </SidebarButton>
      <SidebarButton>
        <HomeIcon className="h-5 w-5" />
        <p className="line-through">Home WIP</p>
      </SidebarButton>
      <SidebarButton>
        <SearchIcon className="h-5 w-5" />
        <p className="line-through">Search WIP</p>
      </SidebarButton>
      <SidebarButton>
        <LibraryIcon className="h-5 w-5" />
        <p className="line-through">Your Library WIP</p>
      </SidebarButton>
      <hr className="border-t-[0.1px] border-gray-900" />
      <SidebarButton>
        <PlusCircleIcon className="h-5 w-5" />
        <p className="line-through">Create Playlist WIP</p>
      </SidebarButton>
      <SidebarButton onClick={getLikedSongsHandler}>
        <HeartIcon className="h-5 w-5" />
        <p>Liked Songs</p>
      </SidebarButton>
      <SidebarButton>
        <RssIcon className="h-5 w-5" />
        <p className="line-through">Your Episodes WIP</p>
      </SidebarButton>
      <hr className="border-t-[0.1px] border-gray-900" />
    </section>
  );
};

export { SidebarNavigation };
