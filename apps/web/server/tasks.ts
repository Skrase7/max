export const getTasks = async () => {
  const tasks = await fetch("http://localhost:5005/task");
  console.log(tasks);
  return tasks.json();
};
