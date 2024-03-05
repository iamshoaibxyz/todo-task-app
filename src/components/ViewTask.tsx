import { ViewTodo } from "@/lib/drizzle";
import CardBox from "@/components/Card";
import { ListX } from "lucide-react";

async function getData() {
  try {
    let nodeEnv;

    const env = process.env.NODE_ENV;
    if (env == "production") {
      nodeEnv = process.env.CUSTOM_URL;
    } else if (env == "development") {
      nodeEnv = process.env.URL;
    }
    const res = await fetch(`${nodeEnv}/api/todo`, {
      method: "GET",
      cache: "no-store",
    });
    return res.json();
  } catch (error: any) {
    console.log("getDataError", error.message);
  }
}
export default async function ViewTask(req: any) {
  const data: ViewTodo[] = await getData();
  return (
    <div>
      {data == undefined ? (
        <div>Fetch to faield</div>
      ) : data.length == 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <ListX size={122}></ListX>
          <h2>Now Task is empty </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-self-center p-6 justify-items-end">
          {data.map((task, i) => (
            <CardBox
              key={i}
              id={task.id}
              description={task.description}
              title={task.title}
              time={task.time}
            ></CardBox>
          ))}
        </div>
      )}
    </div>
  );
}
