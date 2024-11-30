import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Heading from "@/components/ui/heading";
import { Textarea } from "@/components/ui/textarea";

const AskQuestionsView: React.FC = () => {
  return (
    <Container>
      <div className="py-40">
        <div className="m-auto border border-gray-200 rounded-lg w-full xl:w-[820px] md:p-11">
          <Card className="flex flex-col items-center justify-center gap-8 md:w-[500px] m-auto">
            <Heading level={1}>Ask Your Question!</Heading>
            <form className="flex flex-col gap-6 w-full">
              <div>
                <Label>Question Title</Label>
                <Input />
              </div>
              <div>
                <Label>Question DEscrtiption</Label>
                <Textarea />
              </div>
              <div className="flex items-center justify-center">
                <Button className="w-full lg:w-96">Send</Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Container>
  );
};
export default AskQuestionsView;
