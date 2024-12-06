import { FaStar, FaThumbsUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import useFormattedDate from "@/hooks/formattedDate";
import { AnswerCardProps } from "@/types";

const AnswerCard: React.FC<AnswerCardProps> = ({ answer }) => {
  const formattedDate = useFormattedDate(answer.createdAt);
  return (
    <div className="mt-8 p-6 md:p-8 flex flex-col gap-4 mx-5 sm:mx-[120px] border border-gray-200 rounded-lg">
      <div className="flex items-center gap-4">
        <div>
          <div className="flex items-center gap-1">{`Likes: ${answer.likes}`}</div>
          <p className="text-sm font-medium">{answer.author}</p>
        </div>
      </div>

      <p className="text-gray-700 text-sm">{answer.content}</p>

      <div className="flex justify-between items-center flex-col sm:flex-row">
        <span className="text-sm text-gray-500">{formattedDate}</span>
        <div className="flex gap-4">
          <Button>
            <FaThumbsUp className="text-white" />
            Like
          </Button>
          <Button>
            <FaStar className="text-white" />
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
