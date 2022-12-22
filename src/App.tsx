import "./App.css";
import Input from "./components/input";
import Todo from "./components/todo";
import HighlightOnRerender from "./redux/highlight-on-rerender";
import useSelector from "./redux/use-selector";

function App() {
  const todos = useSelector((todos) => todos.ids);

  return (
    <HighlightOnRerender>
      <div className="app">
        <header className="header">
          <h1>Todos</h1>
        </header>
        <main>
          <Input />
          <div className="todos">
            {todos.map((item) => (
              <Todo key={item} id={item} />
            ))}
          </div>
        </main>
      </div>
    </HighlightOnRerender>
  );
}

export default App;
