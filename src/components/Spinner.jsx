import { cn } from "@/lib/utils";
import { RotatingLines } from "react-loader-spinner";

const Spinner = ({ height }) => {
  return (
    <div className={cn("flex items-center justify-center", height)}>
      <RotatingLines height="50" width="50" strokeColor="#f48fb1" />
    </div>
  );
};
export default Spinner;
