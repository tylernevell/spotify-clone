import { atom } from 'recoil';

const currentTrackIdState = atom<string | undefined>({
  key: 'currentTrackIdState',
  default: undefined,
});

const isPlayingState = atom<boolean>({
  key: 'isPlayingState',
  default: false,
});

export { currentTrackIdState, isPlayingState };
