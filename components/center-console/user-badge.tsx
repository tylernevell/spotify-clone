import { ChevronDownIcon } from '@heroicons/react/outline';

/* eslint-disable @next/next/no-img-element */
interface UserBadgeProps {
  src?: string | null;
  alt?: string | null;
  username?: string | null;
}

const UserBadge = (props: UserBadgeProps) => {
  const { src, alt, username } = props;

  return (
    <header className="absolute top-5 right-8">
      <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
        <img
          className="rounded-full w-10 h-10"
          src={src as string}
          alt={alt as string}
        />
        <h2>{username}</h2>
        <ChevronDownIcon className="w-5 h-5" />
      </div>
    </header>
  );
};

export { UserBadge };
