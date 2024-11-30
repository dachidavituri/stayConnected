import { FaStar, FaThumbsUp, FaRegStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
interface AnsweredBy {
  avatarUrl: string;
  name: string;
  rating: number;
}

interface AnswerCardProps {
  answer: {
    answeredBy: AnsweredBy;
    date: string;
    body: string;
  };
}

const AnswerCard: React.FC<AnswerCardProps> = ({ answer }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < rating ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaRegStar key={i} className="text-gray-400" />
        ),
      );
    }
    return stars;
  };

  return (
    <div className="mt-8 p-6 md:p-8 flex flex-col gap-4 mx-5 sm:mx-[120px] border border-gray-200 rounded-lg">
      <div className="flex items-center gap-4">
        <img
          src={answer.answeredBy.avatarUrl}
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium">{answer.answeredBy.name}</p>
          <div className="flex items-center gap-1 text-yellow-500">
            {renderStars(answer.answeredBy.rating)}
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
