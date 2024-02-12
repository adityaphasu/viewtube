import { Link } from "react-router-dom";

import {
  demoThumbnail,
  demoVideo,
  demoChannelTitle,
  demoVideoTitle,
  demoChannel,
} from "@/utils/constants";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/Card";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(snippet);
  return (
    <Card className="">
      <Link to={videoId ? `/video/${videoId}` : demoVideo}>
        <CardHeader className="h-auto w-auto overflow-hidden p-0 sm:h-[11.25rem] sm:w-80 md:rounded-lg">
          <img
            src={snippet?.thumbnails?.high?.url}
            alt={snippet.title}
            className="-my-[9.45%] object-cover"
          />
        </CardHeader>
        <CardContent>hifdddf</CardContent>
      </Link>
    </Card>
  );
};
export default VideoCard;
