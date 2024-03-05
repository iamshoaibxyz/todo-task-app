"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogPortal,
} from "@/components/ui/alert-dialog";

export function AlertDialogDemo({ id }: { id: number | undefined }) {
  const { refresh } = useRouter();
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const deleteTask = await fetch("/api/todo", {
        method: "DELETE",
        body: JSON.stringify(id),
      });
      toast.success("Task successfully deleted");
    } catch (error) {
      console.log("Error", error);
    } finally {
      refresh();
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <p className="flex items-center justify-center cursor-pointer hover:scale-105 -mt-[6px] h-full">
          <X size={16}></X>
        </p>
      </AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete task
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <form onSubmit={handleSubmit}>
              <button className="w-full" type="submit">
                <AlertDialogAction className="w-full">
                  Continue
                </AlertDialogAction>
              </button>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
}
