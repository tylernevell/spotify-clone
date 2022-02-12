import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';
import { SidebarButton } from './sidebar-button';

const SidebarNavigation = () => {
  const { data: session, status } = useSession();

  return (
    <section className="space-y-4 mb-4">
      <SidebarButton onClick={() => signOut()}>
        <LogoutIcon className="h-5 w-5" />
        <p>Log Out</p>
      </SidebarButton>
      <SidebarButton>
        <HomeIcon className="h-5 w-5" />
        <p>Home</p>
      </SidebarButton>
      <SidebarButton>
        <SearchIcon className="h-5 w-5" />
        <p>Search</p>
      </SidebarButton>
      <SidebarButton>
        <LibraryIcon className="h-5 w-5" />
        <p>Your Library</p>
      </SidebarButton>
      <hr className="border-t-[0.1px] border-gray-900" />
      <SidebarButton>
        <PlusCircleIcon className="h-5 w-5" />
        <p>Create Playlist</p>
      </SidebarButton>
      <SidebarButton>
        <HeartIcon className="h-5 w-5" />
        <p>Liked Songs</p>
      </SidebarButton>
      <SidebarButton>
        <RssIcon className="h-5 w-5" />
        <p>Your Episodes</p>
      </SidebarButton>
      <hr className="border-t-[0.1px] border-gray-900" />
    </section>
  );
};

export { SidebarNavigation };
