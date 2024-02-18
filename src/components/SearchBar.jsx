import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mt-1 flex items-center space-x-2"
    >
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-48 rounded-full pr-16 sm:w-[26rem]"
        placeholder="Search...."
      />
      <Button
        aria-label="search"
        type="submit"
        variant="outline"
        className="absolute right-0 rounded-full bg-primary-foreground dark:bg-[#1F1F1F]"
      >
        <Search className="h-6 w-6" />
      </Button>
    </form>
  );
};
export default SearchBar;
