import ToDoList from "@/components/ToDoList";
import { useState } from "react";

function App() {
  // ✅ Part A: State Management in TypeScript
  const [tasks, setTasks] = useState<string[]>([
    "Do laundry",
    "Go to gym",
    "Walk dog",
  ]);

  return (
    <div>
      <h1>My Tasks</h1>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
