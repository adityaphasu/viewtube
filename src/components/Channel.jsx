import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "@/utils/fetchFromAPI";

const Channel = () => {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);

  const { channelId } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${channelId}`).then((data) =>
      setChannel(data?.items[0]),
    );
    fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items),
    );
  }, [channelId]);

  return (
    <div className="min-h-[89vh]">
      <div className="z-10 h-[18.75rem] bg-gradient-1"></div>
      <ChannelCard
        channelDetail={channel}
        linkEnabled={false}
        bg="bg-transparent"
        marginTop="mt-[-6.25rem]"
        shadow="shadow-none"
      />
      <div className="flex p-2 sm:p-14">
        <Videos
          videos={videos}
          classes="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        />
      </div>
    </div>
  );
};
export default Channel;
