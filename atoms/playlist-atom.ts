import { atom } from 'recoil';

const playlistIdState = atom<string | null>({
  key: 'playlistIdState',
  default: null,
});

const playlistState = atom<SpotifyApi.SinglePlaylistResponse | null>({
  key: 'playlistState',
  default: null,
});

export { playlistIdState, playlistState };
