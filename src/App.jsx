import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Video from "./components/Video";
import Channel from "./components/Channel";
import SearchFeed from "./components/SearchFeed";
import { ThemeProvider } from "./components/providers/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <header>
        <Navbar />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:videoId" element={<Video />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
