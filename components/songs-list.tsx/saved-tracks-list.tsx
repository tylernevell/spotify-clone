import { useRecoilValue } from 'recoil';
import { savedTracksState } from '../../atoms/saved-tracks-atom';
import { Song } from './song';

const SavedTracksList = () => {
  const songList = useRecoilValue(savedTracksState);
  return (
    <section className="flex flex-col px-8 pb-28 space-y-1 ">
      {songList?.map((track, idx) => (
        <Song key={track.track.id} song={track} order={idx} />
      ))}
    </section>
  );
};

export { SavedTracksList };
