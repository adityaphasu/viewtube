import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "@/utils/fetchFromAPI";
import { Copyright } from "lucide-react";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      <div className="flex h-auto flex-col border-r border-r-gray-300 px-0 md:h-[89vh]">
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <p className="mt-1.5 hidden items-center justify-center gap-1 text-sm text-muted-foreground md:flex ">
          <Copyright className="h-4 w-4" /> Copyright 2024
        </p>
      </div>
      <div className="h-[89vh] flex-1 overflow-y-auto  text-center sm:p-2 md:text-left">
        <h4 className="mb-2 hidden text-2xl font-bold sm:block">
          {selectedCategory} <span>videos</span>
        </h4>
        <Videos videos={videos} />
      </div>
    </div>
  );
};
export default Feed;
