import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <form
      onSubmit={() => {}}
      className="relative mt-1 flex items-center space-x-2"
    >
      <Input
        onChange={() => {}}
        className="w-40 rounded-full sm:w-96"
        placeholder="Search...."
      />
      <Button
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
