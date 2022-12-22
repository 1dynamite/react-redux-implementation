import useDispatch from "../redux/use-dispatch";
import useSelector from "../redux/use-selector";
import "../App.css";
import HighlightOnRerender from "../redux/highlight-on-rerender";

export default function Todo(props: { id: number }) {
  const todo = useSelector((todos) => todos.entities[props.id]);
  const dispatch = useDispatch();

  return (
    <HighlightOnRerender>
      <div className="todo-item">
        <input
          className="checkbox"
          type="checkbox"
          checked={todo.checked}
          onChange={(e) =>
            dispatch({
              type: "todos/check",
              payload: { id: props.id, checked: e.target.checked },
            })
          }
        />
        <span className={todo.checked ? "todo-text-striked" : "todo-text"}>
          {todo.text}
        </span>
        <div className="delete-icon">
          <img
            alt="delete-icon"
            src="https://i.imgur.com/2Lpv35o.png"
            onClick={() =>
              dispatch({ type: "todos/delete", payload: props.id })
            }
          />
        </div>
      </div>
    </HighlightOnRerender>
  );
}
