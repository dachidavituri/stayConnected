import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Heading from "@/components/ui/heading";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import React, { useState, useRef, useCallback } from "react";
import { X } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

type Framework = Record<"value" | "label", string>;

const FRAMEWORKS = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "wordpress", label: "WordPress" },
  { value: "express.js", label: "Express.js" },
  { value: "nest.js", label: "Nest.js" },
] satisfies Framework[];

const AskQuestionsView: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Framework[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleUnselect = useCallback((framework: Framework) => {
    setSelected((prev) => prev.filter((s) => s.value !== framework.value));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    [],
  );

  const selectables = FRAMEWORKS.filter(
    (framework) => !selected.some((s) => s.value === framework.value),
  );

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
                <Label>Question Description</Label>
                <Textarea />
              </div>
              <div className="border border-gray-200 rounded-lg p-[14px_12px] flex flex-wrap ">
                <Command
                  onKeyDown={handleKeyDown}
                  className="overflow-visible bg-transparent"
                >
                  <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                    <div className="flex flex-wrap gap-1">
                      {selected.map((framework) => (
                        <Badge key={framework.value} variant="secondary">
                          {framework.label}
                          <button
                            className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            onClick={() => handleUnselect(framework)}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                          >
                            <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                          </button>
                        </Badge>
                      ))}
                      <CommandPrimitive.Input
                        ref={inputRef}
                        value={inputValue}
                        onValueChange={setInputValue}
                        onBlur={() => setOpen(false)}
                        onFocus={() => setOpen(true)}
                        placeholder="Select frameworks..."
                        className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>
                  <div className="relative mt-2">
                    <CommandList>
                      {open && selectables.length > 0 && (
                        <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                          <CommandGroup className="h-full overflow-auto">
                            {selectables.map((framework) => (
                              <CommandItem
                                key={framework.value}
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                                onSelect={() => {
                                  setInputValue("");
                                  setSelected((prev) => [...prev, framework]);
                                }}
                                className="cursor-pointer"
                              >
                                {framework.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </div>
                      )}
                    </CommandList>
                  </div>
                </Command>
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
