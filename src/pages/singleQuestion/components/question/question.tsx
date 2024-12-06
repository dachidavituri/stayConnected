import Card from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";
import useFormattedDate from "@/hooks/formattedDate";
import { DetailQuestionProps } from "@/types";

const Question: React.FC<DetailQuestionProps> = ({
  author,
  createdAt,
  description,
  tags,
  title,
}) => {
  const formattedDate = useFormattedDate(createdAt);
  return (
    <Card className="p-6 md:p-8 bg-white rounded-lg flex flex-col gap-8">
      <div className="flex justify-end items-center gap-6">
        <span className="text-sm text-black font-bold">{author}</span>
        <span className="text-sm text-gray-500">{formattedDate}</span>
      </div>

      <Heading level={1} className="text-2xl md:text-3xl font-bold">
        {title}
      </Heading>

      <p className="text-base text-gray-700 leading-relaxed">{description}</p>
      <div className="flex flex-wrap  gap-2">
        {tags &&
          tags.map((badge, index) => {
            return <Badge key={index}>{badge.name}</Badge>;
          })}
      </div>
    </Card>
  );
};

export default Question;
