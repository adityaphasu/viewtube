import { useState, useEffect } from "react";
import Videos from "./Videos";
import { fetchFromAPI } from "@/utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <div className="h-[89vh] flex-1 overflow-y-auto  text-center sm:p-2 md:text-left">
      <h4 className="mb-2 hidden text-2xl font-bold sm:block">
        Search Results for: <span>{searchTerm}</span> videos
      </h4>
      <Videos videos={videos} />
    </div>
  );
};
export default SearchFeed;
