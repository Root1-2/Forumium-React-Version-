import { BiLoaderAlt } from "react-icons/bi";

export default function SpinnerMini() {
  return (
    <div className="h-5 w-5 animate-spin">
      <BiLoaderAlt color="white" className="h-full w-full" />
    </div>
  );
}
