import logo from "./logo.svg";
import "./App.css";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router";
import CompletedTaskList from "./components/CompletedTaskList";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TaskManager />}>
          <Route index element={<TaskList />} />
          <Route path="/completed" element={<CompletedTaskList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
