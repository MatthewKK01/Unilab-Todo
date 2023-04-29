import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartHere from "./pages/StartHere";
import Login from "./pages/Login";
import TodoList from "./pages/todoList";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<StartHere />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
