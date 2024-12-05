import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { answerFormSchema } from "@/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateAnswer } from "@/react-query/mutation/answers";
import { useParams } from "react-router";
import { AnswerPayload } from "@/api/answers/index.types";
const AnswerFild: React.FC = () => {
  type AnswerForm = z.infer<typeof answerFormSchema>;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AnswerForm>({
    resolver: zodResolver(answerFormSchema),
    defaultValues: { content: "" },
  });
  const { id } = useParams();
  const { mutate: submitQuestion } = useCreateAnswer(id);
  const onSubmit: SubmitHandler<AnswerForm> = (data) => {
    const payload: AnswerPayload = {
      content: data.content,
      question: parseInt(id ?? "0"),
    };
    submitQuestion(payload);
  };
  return (
    <div className="mt-8 px-6 md:px-8 flex flex-col">
      <Heading level={2} className="mb-2 text-lg font-medium text-gray-800">
        Answer the question
      </Heading>

      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full">
          <Controller
            control={control}
            name="content"
            render={({ field }) => (
              <Textarea
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none  text-gray-700"
                placeholder="Write your answer here..."
                rows={5}
                {...field}
              />
            )}
          />
          {errors.content && (
            <span className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
              {errors.content.message}
            </span>
          )}
        </div>
        <Button className="sm:w-[400px] w-40">Submit</Button>
      </form>
    </div>
  );
};

export default AnswerFild;
