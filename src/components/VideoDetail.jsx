import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import { fetchFromAPI } from "@/utils/fetchFromAPI";
import Spinner from "./Spinner";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { videoId } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideo(data.items[0]),
    );
    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${videoId}&type=video`,
    ).then((data) => setRelatedVideos(data.items));
  }, [videoId]);

  if (!video?.snippet || !relatedVideos) return <Spinner height="h-[89vh]" />;

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount },
  } = video;

  return (
    <div className="h-[89vh] pt-5 lg:px-14">
      <div className="grid grid-cols-1 gap-1.5 lg:grid-cols-custom">
        <div className="w-full rounded-2xl">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            className="react-player"
          />
          <h2 className="pl-2 text-[1.3rem] font-bold">{title}</h2>
          <div className="flex justify-between px-2 py-1">
            <Link to={`/channel/${channelId}`}>
              <p className="text-base text-muted-foreground">{channelTitle}</p>
            </Link>
            <div className="flex justify-end gap-2 md:gap-4">
              <p className="text-muted-foreground">
                {parseInt(viewCount).toLocaleString()} views
              </p>
              <p className="text-muted-foreground">
                {parseInt(likeCount).toLocaleString()} likes
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-2 py-5 md:py-1">
          <Videos
            videos={relatedVideos}
            classes="grid-cols-1 sm:grid-cols-2 lg:grid-cols-1"
            videoClass="grid grid-cols-2 gap-3"
          />
        </div>
      </div>
    </div>
  );
};
export default VideoDetail;
