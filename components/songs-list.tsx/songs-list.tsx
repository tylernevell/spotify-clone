import { useRecoilValue } from 'recoil';
import { playlistState } from '../../atoms/playlist-atom';
import { Song } from './song';

const SongsList = () => {
  const playlist = useRecoilValue(playlistState);

  return (
    <section className="flex flex-col px-8 pb-28 space-y-1 ">
      {playlist?.tracks.items.map((track, idx) => (
        <Song key={track.track.id} song={track} order={idx} />
      ))}
    </section>
  );
};

export { SongsList };
