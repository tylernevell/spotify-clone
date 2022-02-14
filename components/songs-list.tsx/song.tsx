/* eslint-disable @next/next/no-img-element */
import format from 'date-fns/format';
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '../../atoms/song-atom';
import { useSpotify } from '../../hooks/use-spotify';

interface SongProps {
  song: SpotifyApi.PlaylistTrackObject | SpotifyApi.SavedTrackObject;
  order: number;
}

const Song = (props: SongProps) => {
  const {
    song: { track },
    order,
  } = props;

  const spotifyApi = useSpotify();

  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const playSongHandler = () => {
    setCurrentTrackId(track.id);
    setIsPlaying(true);
    spotifyApi.play({
      uris: [track.uri],
    });
  };

  return (
    <div
      onClick={playSongHandler}
      className="grid grid-cols-2 py-4 px-5 hover:bg-gray-900 cursor-pointer rounded text-gray-500"
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img src={track.album.images[0].url} alt="" className="h-10 w-10" />
        <div className="truncate">
          <p className="w-36 lg:w-64 text-white ">{track.name}</p>
          <p className="w-40">{track.artists[0].name}</p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="w-40 hidden md:inline">{track.album.name}</p>
        <p>{format(track.duration_ms, 'mm:ss')}</p>
      </div>
    </div>
  );
};

export { Song };
