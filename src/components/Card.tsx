"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { AlertDialogDemo } from "@/components/AlertDailog";

export default function CardBox({
  id,
  title,
  description,
  time,
}: {
  id?: number;
  title: string | null;
  description: string | null;
  time?: number | string;
}) {
  return (
    <Card className="flex flex-col overflow-hidden w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className=" whitespace-pre-wrap overflow-hidden">
          {title}
        </CardTitle>
        <CardDescription>
          <AlertDialogDemo id={id}></AlertDialogDemo>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 h-full">
        <div className="space-y-1 h-full">{description}</div>
      </CardContent>
      <CardFooter className="flex justify-end text-xs whitespace-pre-wrap">
        <span className="italic">Created at &nbsp; </span> {time}
      </CardFooter>
    </Card>
  );
}
