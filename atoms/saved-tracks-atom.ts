import { atom } from 'recoil';

const savedTracksState = atom<SpotifyApi.SavedTrackObject[] | undefined>({
  key: 'savedTracksState',
  default: undefined,
});

const savedTracksSizeState = atom<number | null>({
  key: 'savedTracksSizeState',
  default: null,
});

export { savedTracksSizeState, savedTracksState };
