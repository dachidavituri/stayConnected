import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Textarea } from "@/components/ui/textarea";

const AnswerFild = () => {
  return (
    <div className="mt-8 px-6 md:px-8 flex flex-col">
      <Heading level={2} className="mb-2 text-lg font-medium text-gray-800">
        Answer the question
      </Heading>

      <form className="flex flex-col items-center gap-4">
        <div className="w-full">
          <Textarea
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            placeholder="Write your answer here..."
            rows={5}
          />
        </div>
        <Button className="sm:w-[400px] w-40 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AnswerFild;
