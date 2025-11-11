interface ToDoListProps {
  tasks: string[];
}

function ToDoList({ tasks }: ToDoListProps) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li> // leave tasks incomplete
      ))}
    </ul>
  );
}

export default ToDoList;
