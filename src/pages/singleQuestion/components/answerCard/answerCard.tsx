import { FaStar, FaThumbsUp, FaRegStar } from "react-icons/fa";

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
    <div
      className="mt-8 p-6 md:p-8 flex flex-col gap-4 mx-5 sm:mx-[120px]"
    >
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
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100">
            <FaThumbsUp className="text-blue-600" />
            Like
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
            <FaStar className="text-white" />
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
