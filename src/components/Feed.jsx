import { Copyright } from "lucide-react";
import { useState, useEffect } from "react";
import SideBar from "./SideBar";

const Feed = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="h-auto border-r border-r-gray-300 px-0 md:h-[92vh] md:px-2">
        <SideBar />
        <p className="mt-1.5 flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <Copyright className="h-4 w-4" /> Copyright 2024
        </p>
      </div>
    </div>
  );
};
export default Feed;
