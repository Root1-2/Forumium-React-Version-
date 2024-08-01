import { BiLoaderAlt } from "react-icons/bi";

const SpinnerMini = () => {
  return (
    <div className="h-5 w-5 animate-spin">
      <BiLoaderAlt className="h-full w-full" />
    </div>
  );
};

export default SpinnerMini;
