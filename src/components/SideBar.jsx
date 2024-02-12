import { categories } from "@/utils/constants";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="sidebar flex h-auto gap-4 overflow-y-auto px-3 py-2 md:h-[95%] md:flex-col md:py-0">
      {categories.map((category) => (
        <Button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          className={cn(
            "justify-start gap-1.5 rounded-xl md:gap-5",
            selectedCategory === category.name
              ? "bg-black text-white dark:bg-white dark:text-black md:bg-accent md:text-black"
              : "bg-accent hover:bg-accent hover:text-accent-foreground md:bg-transparent",
          )}
        >
          <category.icon strokeWidth={1.5} />
          <span
            className={cn(
              "font-normal opacity-80",
              selectedCategory === category.name && "font-bold opacity-100",
            )}
          >
            {category.name}
          </span>
        </Button>
      ))}
    </div>
  );
};
export default SideBar;
