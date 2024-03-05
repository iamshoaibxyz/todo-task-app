import ViewTask from "@/components/ViewTask";
export default function Home(req: any) {
  return (
    <div className="w-full flex-col mt-5 flex items-center justify-center gap-12">
      <ViewTask></ViewTask>
    </div>
  );
}
