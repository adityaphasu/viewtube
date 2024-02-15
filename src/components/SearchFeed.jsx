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
      <Videos
        videos={videos}
        classes="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      />
    </div>
  );
};
export default SearchFeed;
