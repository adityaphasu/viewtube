import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="w-full flex-wrap justify-center gap-4 sm:grid sm:grid-cols-2 md:justify-start lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((video, index) => (
        <div key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </div>
      ))}
    </div>
  );
};
export default Videos;
