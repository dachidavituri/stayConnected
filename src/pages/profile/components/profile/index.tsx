import Card from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Heading from "@/components/ui/heading";

const Profile: React.FC = () => {
  return (
    <Card className="my-16 p-12 flex gap-10 items-center">
      <Avatar className="rounded-full overflow-hidden w-36 h-36">
        <AvatarImage 
          className="w-full h-full rounded"
          src="https://github.com/shadcn.png"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="">
        <Heading level={1}>Tiko</Heading>
        <div className="flex flex-col lg:flex-row lg:gap-5 mt-4 lg:items-center">
          <div className="flex gap-2">
            <div className="font-semibold text-gray-500">Raiting:</div>
            <div className="text-lg font-semibold">21</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="font-semibold text-gray-500">Asked Questions:</div>
            <div className="text-lg font-semibold">2</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;