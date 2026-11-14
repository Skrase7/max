import { Metadata } from "next";
import styles from "./page.module.scss";
import type { Task } from "@repo/types";
import { getTasks } from "../../server/tasks";

export const metadata: Metadata = {
  title: "kanban page",
  description: "",
};

export default async function KanbanPage() {
  let tasks: Task[] = await getTasks();
  console.log(tasks);
  return (
    <div className={styles.kanbanPage}>
      {tasks.map((task) => (
        <div key={task.id}>
          <div>{task.title}</div>
          <div>{task.description}</div>
        </div>
      ))}
    </div>
  );
}
