import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline';
import { SidebarButton } from './sidebar-button';
import { SidebarNavigation } from './sidebar-navigation';
import { SidebarPlaylists } from './sidebar-playlists';

const Sidebar = () => {
  return (
    <aside className="text-gray-500 p-5 text-sm border-r border-gray-900 ">
      <SidebarNavigation />
      <SidebarPlaylists />
    </aside>
  );
};

export { Sidebar };
