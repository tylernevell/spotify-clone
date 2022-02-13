import { atom } from 'recoil';

const currentTrackIdState = atom<string | null>({
  key: 'currentTrackIdState',
  default: null,
});

const isPlayingState = atom<boolean>({
  key: 'currentTrackIdState',
  default: false,
});

export { currentTrackIdState, isPlayingState };
