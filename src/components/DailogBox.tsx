"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export function DialogDemo() {
  const { refresh } = useRouter();
  const [boxOpen, setBoxOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState(0);
  const [inputLength, setInputLength] = useState(0);

  const textAreaHandler = (e: any) => {
    const value = e.target.value;
    const values = value.substr(0, 150);
    length <= 150 && setDescription(values);
    setLength(values.length);
  };

  const inputHandler = (e: any) => {
    const inputValue = e.target.value;
    const inputValues = inputValue.substr(0, 25);
    inputLength <= 25 && setTitle(inputValues);
    setInputLength(inputValues.length);
  };

  async function handleSubmit() {
    setBoxOpen(false);
    try {
      const res = await fetch("/api/todo", {
        method: "POST",
        body: JSON.stringify({ title, description }),
      });
      toast.success("Congratulation! Task is added");
    } catch (error: any) {
      console.log("postDataError", error.message);
    } finally {
      setDescription("");
      setTitle("");
      refresh();
    }
  }

  return (
    <Dialog onOpenChange={setBoxOpen} open={boxOpen}>
      <DialogTrigger asChild>
        <Button className="border-2" variant="outline">
          <div className="flex items-center gap-1 sm:gap-2 justify-center">
            <Plus className=""></Plus>
            <span>Add Task </span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-[412px] -mt-24 sm:mt-0 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todos</DialogTitle>
          <DialogDescription>
            Write at least 3 latter in each box. Click to save when you are
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 py-2 sm:gap-4 sm:py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right hidden sm:inline-block">
              Title
            </Label>
            <Input
              id="name"
              placeholder="Define task"
              value={title}
              className="col-span-4 sm:col-span-3"
              onChange={inputHandler}
            />
          </div>
          <div className="grid w-full grid-cols-4 items-end justify-items-end gap-4">
            <Label htmlFor="name" className="col-span-4 -mt-1 text-right">
              {inputLength}/25
            </Label>
          </div>
          <div className="grid w-full grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right hidden sm:inline-block">
              Description
            </Label>
            <Textarea
              className="max-h-24 w-full col-span-4 sm:col-span-3"
              placeholder="Describe your Task..."
              value={description}
              onChange={textAreaHandler}
            />
          </div>
          <div className="grid w-full grid-cols-4 items-end justify-items-end gap-4">
            <Label htmlFor="name" className="col-span-4 -mt-1 text-right">
              {length}/150
            </Label>
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={title.length < 3 || description.length < 3}
            type="submit"
            onClick={handleSubmit}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
