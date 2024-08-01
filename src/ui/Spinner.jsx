import { BiLoaderAlt } from "react-icons/bi";

export default function Spinner() {
  return (
    <div className="h-16 w-16 animate-spin">
      <BiLoaderAlt className="h-full w-full text-blue-500" />
    </div>
  );
}
