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

const Sidebar = () => {
  return (
    <aside className="text-gray-500 p-5 border-r border-gray-900 ">
      <SidebarNavigation />
    </aside>
  );
};

export { Sidebar };
