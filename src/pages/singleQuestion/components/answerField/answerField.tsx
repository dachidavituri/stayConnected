import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Textarea } from "@/components/ui/textarea";

const AnswerFild: React.FC = () => {
  return (
    <div className="mt-8 px-6 md:px-8 flex flex-col">
      <Heading level={2} className="mb-2 text-lg font-medium text-gray-800">
        Answer the question
      </Heading>

      <form className="flex flex-col items-center gap-4">
        <div className="w-full">
          <Textarea
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black-500 text-gray-700"
            placeholder="Write your answer here..."
            rows={5}
          />
        </div>
        <Button className="sm:w-[400px] w-40">Submit</Button>
      </form>
    </div>
  );
};

export default AnswerFild;
