import { categories } from "@/utils/constants";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const selectedCategory = "Music";

const SideBar = () => {
  return (
    <div className="sidebar flex h-auto gap-1 overflow-y-auto md:h-[95%] md:flex-col">
      {categories.map((category) => (
        <Button
          key={category.name}
          variant="ghost"
          className={cn(
            "justify-start gap-6 rounded-xl",
            selectedCategory === category.name && "bg-accent",
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
