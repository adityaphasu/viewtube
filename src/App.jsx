import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Channel from "./components/Channel";
import SearchFeed from "./components/SearchFeed";
import { ThemeProvider } from "./components/providers/theme-provider";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <header>
        <Navbar />
      </header>
      <>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
