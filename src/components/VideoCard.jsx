import { Link } from "react-router-dom";

import {
  demoVideo,
  demoChannelTitle,
  demoVideoTitle,
  demoChannel,
} from "@/utils/constants";

import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/Card";
import { decodeHtmlEntities } from "@/utils/decodeHtmlEntities";
import { cn } from "@/lib/utils";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
  ...props
}) => {
  return (
    <Card className={cn("border-none shadow-none", props.className)}>
      <Link to={videoId ? `/video/${videoId}` : demoVideo}>
        <CardHeader className="h-auto w-auto overflow-hidden p-0 md:rounded-lg">
          <img
            src={snippet?.thumbnails?.high?.url}
            alt={snippet.title}
            className="-my-[9.45%] object-contain"
          />
        </CardHeader>
      </Link>
      <CardContent className="h-[6.625rem] px-1.5 py-2 text-left md:p-1">
        <Link to={videoId ? `/video/${videoId}` : demoVideo}>
          <CardTitle className="truncate-2-lines text-base font-medium">
            {decodeHtmlEntities(snippet?.title) || demoVideoTitle}
          </CardTitle>
        </Link>
        <Link
          to={
            snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannel
          }
        >
          <p className="truncate text-muted-foreground">
            {snippet?.channelTitle || demoChannelTitle}
          </p>
        </Link>
      </CardContent>
    </Card>
  );
};
export default VideoCard;
