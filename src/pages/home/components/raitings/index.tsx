import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Heading from "@/components/ui/heading";

import { MdWorkspacePremium } from "react-icons/md";

type RatingItem = {
  name: string;
  rating: number;
};

const ReitingITem: React.FC<RatingItem> = ({ name, rating }) => {
  return (
    <div className="flex gap-3 items-center w-full">
      <Avatar className="rounded-full overflow-hidden">
        <AvatarImage
          className="w-11 h-11 rounded"
          src="https://github.com/shadcn.png"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div>
        <Heading level={2}>{name}</Heading>
        <div className="flex gap-2 items-center">
          <MdWorkspacePremium />
          <div>{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default ReitingITem;
