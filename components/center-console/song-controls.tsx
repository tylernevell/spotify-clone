import { useSpotify } from '../../hooks/use-spotify';
import {
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  ReplyIcon,
  RewindIcon,
  SwitchHorizontalIcon,
} from '@heroicons/react/solid';

interface SongControlsProps {
  isPlaying: boolean;
  onPlayPause: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

const SongControls = (props: SongControlsProps) => {
  const { isPlaying, onPlayPause } = props;
  const spotifyApi = useSpotify();

  return (
    <div className="flex items-center justify-evenly">
      <SwitchHorizontalIcon className="player-btn" />
      <RewindIcon
        onClick={() => spotifyApi.skipToPrevious()}
        className="player-btn"
      />
      {isPlaying ? (
        <PauseIcon onClick={onPlayPause} className="player-btn w-10 h-10" />
      ) : (
        <PlayIcon onClick={onPlayPause} className="player-btn w-10 h-10" />
      )}
      <FastForwardIcon
        onClick={() => spotifyApi.skipToNext()}
        className="player-btn"
      />
      <ReplyIcon className="player-btn" />
    </div>
  );
};

export { SongControls };
