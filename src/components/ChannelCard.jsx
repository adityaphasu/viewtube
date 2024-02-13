import { Card, CardTitle, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { demoThumbnail } from "@/utils/constants";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, ...className }) => {
  return (
    <Card className={cn("border-none", className.bg, className.marginTop)}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent className="flex flex-col items-center justify-center pt-6 text-center">
          <img
            src={channelDetail?.snippet?.thumbnails?.high?.url || demoThumbnail}
            alt={channelDetail?.snippet?.title}
            className="mb-2 h-36 w-36 rounded-full border"
          />
          <CardTitle className="truncate text-base font-medium">
            {channelDetail?.snippet?.title}{" "}
          </CardTitle>
          {channelDetail?.statistics?.subscriberCount && (
            <p>
              {parseInt(
                channelDetail?.statistics?.subscriberCount,
              ).toLocaleString()}{" "}
              Subscribers
            </p>
          )}
        </CardContent>
      </Link>
    </Card>
  );
};
export default ChannelCard;
