import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentTrackIdState } from '../atoms/song-atom';
import { useSpotify } from './use-spotify';

const useSongInfo = () => {
  const spotifyApi = useSpotify();
  const [currentSongId, setCurrentSongId] = useRecoilState(currentTrackIdState);
  console.log(currentSongId);
  const [songInfo, setSongInfo] =
    useState<SpotifyApi.SingleTrackResponse | null>(null);

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentSongId) {
        const trackInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${currentSongId}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
            },
          }
        ).then((res) => res.json());
        setSongInfo(trackInfo);
      }
    };
    fetchSongInfo();
  }, [currentSongId, spotifyApi]);
  return songInfo;
};

export { useSongInfo };
