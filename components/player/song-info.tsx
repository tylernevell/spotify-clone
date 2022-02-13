/* eslint-disable @next/next/no-img-element */
interface SongInfoProps {
  songInfo: SpotifyApi.SingleTrackResponse | null;
}

const SongInfo = (props: SongInfoProps) => {
  const { songInfo } = props;

  return (
    <div className="flex items-center space-x-4">
      <img
        src={songInfo?.album?.images?.[0]?.url}
        alt=""
        className="hidden md:inline h-16 w-16"
      />
      <div>
        <h3 className="text-sm">{songInfo?.name}</h3>
        <p className="text-xs text-gray-500">{songInfo?.artists?.[0]?.name}</p>
      </div>
    </div>
  );
};

export { SongInfo };
