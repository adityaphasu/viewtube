import { cn } from "@/lib/utils";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, classes, ...props }) => {
  return (
    <div
      className={cn(
        "grid w-full justify-center gap-4 md:justify-start",
        classes,
      )}
    >
      {videos?.map((video, index) => (
        <div key={index}>
          {video.id.videoId && (
            <VideoCard video={video} className={props.videoClass} />
          )}
          {video.id.channelId && (
            <ChannelCard channelDetail={video} linkEnabled={true} />
          )}
        </div>
      ))}
    </div>
  );
};
export default Videos;
