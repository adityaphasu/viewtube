import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="w-full flex-wrap justify-center gap-4 sm:flex md:justify-start">
      {videos
        .filter((video) => video.id.videoId)
        .map((video, index) => (
          <div key={index}>
            {video.id.videoId && <VideoCard video={video} />}
            {/* {video.id.channelId && <ChannelCard channelDetail={video} />} */}
          </div>
        ))}
    </div>
  );
};
export default Videos;
