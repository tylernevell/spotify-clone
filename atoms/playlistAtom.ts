import { atom } from 'recoil';

const playlistIdState = atom<string | null>({
  key: 'playlistIdState',
  default: '76n9O5In8V2L5T3po9QMmW',
});

export { playlistIdState };
