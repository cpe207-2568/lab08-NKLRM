import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { Task } from "./components/taskcard";
import type { TaskCardProps } from "../libs/types";
import { TaskInput } from "./components/taskinput";
import { Footer } from "./components/footer";
const task: TaskCardProps[] = [
  {
    id: 1,
    title: "Read a book",
    description: "Vite + React + Bootstrap + TS",
    isDone: true,
  },
  {
    id: 1,
    title: "Write code",
    description: "Finish project for class",
    isDone: true,
  },
  {
    id: 1,
    title: "Deploy app",
    description: "Push project to GitHub Pages",
    isDone: true,
  },
];

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}

        <Sidebar userName="Kunakorn" type="admin"></Sidebar>
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <TaskInput></TaskInput>
            {/* Card รายการ */}
            <Task {...task[0]}></Task>
            <Task {...task[1]}></Task>
            <Task {...task[2]}></Task>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer
        year="2026"
        fullName="Kunakorn Nilphetparee"
        studentId={670610978}
      ></Footer>
    </div>
  );
}

export default App;
