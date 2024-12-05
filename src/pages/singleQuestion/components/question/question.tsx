import Card from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";
interface Tag {
  name: string;
  id: number;
}

interface DetailQuestionProps {
  author: string | undefined;
  createdAt: string | undefined;
  description: string | undefined;
  tags: Tag[] | undefined;
  title: string | undefined;
}

const Question: React.FC<DetailQuestionProps> = ({
  author,
  createdAt,
  description,
  tags,
  title,
}) => {
  const dateObj = createdAt ? new Date(createdAt) : new Date();
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;
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
