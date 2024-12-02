import { FaStar, FaThumbsUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
interface AnsweredBy {
  avatarUrl: string;
  name: string;
  likes: number;
}

interface AnswerCardProps {
  answer: {
    answeredBy: AnsweredBy;
    date: string;
    body: string;
  };
}

const AnswerCard: React.FC<AnswerCardProps> = ({ answer }) => {
  return (
    <div className="mt-8 p-6 md:p-8 flex flex-col gap-4 mx-5 sm:mx-[120px] border border-gray-200 rounded-lg">
      <div className="flex items-center gap-4">
        <span className="w-10 h-10 rounded-full bg-gray-400 text-white font-bold flex items-center justify-center">
          {answer.answeredBy.name.split(" ").map((part, index) =>
            index < 2 ? (
              <span key={index} className="text-sm">
                {part[0]}
              </span>
            ) : null,
          )}
        </span>
        <div>
          <p className="text-sm font-medium">{answer.answeredBy.name}</p>
          <div className="flex items-center gap-1">
            {`Likes: ${answer.answeredBy.likes}`}
          </div>
        </div>
      </div>

      <p className="text-gray-700 text-sm">{answer.body}</p>

      <div className="flex justify-between items-center flex-col sm:flex-row">
        <span className="text-sm text-gray-500">{answer.date}</span>
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
