import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Heading from "@/components/ui/heading";
import { Textarea } from "@/components/ui/textarea";
import FancyMultiSelect from "#/questions/components/multi-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addQuetionSchema } from "@/schema";
import { useCreateQuestion } from "@/react-query/mutation/question";
import { notification } from "antd";
import { z } from "zod";

const AskQuestionsView: React.FC = () => {
  type AddQuestionForm = z.infer<typeof addQuetionSchema>;

  const { mutate: submitQuestion, } = useCreateQuestion();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (type: "success" | "error", message: string) => {
    api[type]({
      message: type === "success" ? "Success" : "Error",
      description: message,
    });
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddQuestionForm>({
    resolver: zodResolver(addQuetionSchema),
    defaultValues: { title: "", description: "", tags: [] },
  });

  const onSubmit: SubmitHandler<AddQuestionForm> = (data) => {
    submitQuestion(data, {
      onSuccess: () => {
        openNotification("success", "Question submitted successfully!");
      },
      onError: (error) => {
        openNotification("error", "Failed to submit question.");
        console.error("Error:", error);
      },
    });
  };
  return (
    <Container>
      <div className="py-40">
        {contextHolder}
        <div className="m-auto border border-gray-200 rounded-lg w-full xl:w-[820px] md:p-11">
          <Card className="flex flex-col items-center justify-center gap-8 md:w-[500px] m-auto">
            <Heading level={1}>Ask Your Question!</Heading>
            <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label>Question Title</Label>
                <Controller
                  control={control}
                  name="title"
                  render={({ field }) => <Input {...field} />}
                />
                {errors.title && (
                  <span className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
                    {errors.title.message}
                  </span>
                )}
              </div>
              <div>
                <Label>Question Description</Label>
                <Controller
                  control={control}
                  name="description"
                  render={({ field }) => <Textarea {...field} />}
                />
                {errors.description && (
                  <span className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
                    {errors.description.message}
                  </span>
                )}
              </div>
              <div className="border border-gray-200 rounded-lg p-[14px_12px] flex flex-wrap ">
                <Controller
                  control={control}
                  name="tags"
                  render={({ field: { value, onChange } }) => (
                    <FancyMultiSelect value={value} onChange={onChange} />
                  )}
                />
                {errors.tags && (
                  <span className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">
                    {errors.tags.message}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Button className="w-full lg:w-96">
                  {"Send"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default AskQuestionsView;
