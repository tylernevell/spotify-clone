/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '../../atoms/song-atom';
import { useSongInfo } from '../../hooks/use-song-info';
import { useSpotify } from '../../hooks/use-spotify';
import { SongInfo } from './song-info';
import { VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/outline';
import { SongControls } from '../center-console/song-controls';
import { debounce } from 'lodash';

const Player = () => {
  const { data: session, status } = useSession();

  const spotifyApi = useSpotify();

  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [volume, setVolume] = useState(50);

  const songInfo = useSongInfo();

  const playPauseHandler = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    });
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      const fetchCurrentSong = () => {
        if (!songInfo) {
          spotifyApi.getMyCurrentPlayingTrack().then((data) => {
            setCurrentTrackId(data?.body?.item?.id);
            spotifyApi.getMyCurrentPlaybackState().then((data) => {
              setIsPlaying(data?.body?.is_playing);
            });
          });
        }
      };
      fetchCurrentSong();
      setVolume(50);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrackId, session, songInfo, spotifyApi]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedAdjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume).catch((err) => {});
    }, 500),
    []
  );

  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debouncedAdjustVolume(volume);
    }
  }, [debouncedAdjustVolume, volume]);

  return (
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      <SongInfo songInfo={songInfo} />
      <SongControls isPlaying={isPlaying} onPlayPause={playPauseHandler} />
      <form className="flex items-center space-x-3 md:space-x-4 justify-end pr-5">
        <VolumeOffIcon onClick={() => setVolume(0)} className="player-btn" />
        <input
          className="w-14 md:w-28"
          type="range"
          value={volume}
          min={0}
          max={100}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
        <VolumeUpIcon
          onClick={() => volume < 91 && setVolume(volume + 10)}
          className="player-btn"
        />
      </form>
    </div>
  );
};

export { Player };
