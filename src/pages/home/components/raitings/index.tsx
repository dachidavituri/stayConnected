import Heading from "@/components/ui/heading";
import { MdWorkspacePremium } from "react-icons/md";

type RatingItem = {
  username: string;
  rating: number;
};

const ReitingITem: React.FC<RatingItem> = ({ username, rating }) => {
  return (
    <div className="flex gap-3 items-center w-full">
      <div className="bg-black text-white  p-1 w-20 font-semibold rounded-xl flex justify-center items-center">
        {username}
      </div>

      <div>
        <Heading level={2}>{username}</Heading>
        <div className="flex gap-2 items-center">
          <MdWorkspacePremium />
          <div>{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default ReitingITem;
