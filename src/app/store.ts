import createStore from "../redux/create-store";

interface Todos {
  ids: number[];
  entities: {
    [id: number]: { id: number; text: string; checked: boolean };
  };
}

type TodosAction =
  | { type: "todos/add"; payload: { id: number; text: string } }
  | { type: "todos/check"; payload: { id: number; checked: boolean } }
  | { type: "todos/delete"; payload: number };

const reducer = (state: Todos, action: TodosAction): Todos => {
  switch (action.type) {
    case "todos/add":
      return {
        ids: [...state.ids, action.payload.id],
        entities: {
          ...state.entities,
          [action.payload.id]: { ...action.payload, checked: false },
        },
      };

    case "todos/check":
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.id]: {
            ...state.entities[action.payload.id],
            checked: action.payload.checked,
          },
        },
      };
    case "todos/delete": {
      const entities = { ...state.entities };
      delete entities[action.payload];

      return {
        ids: state.ids.filter((id) => id !== action.payload),
        entities,
      };
    }
  }
};

export default createStore(reducer, { ids: [], entities: {} });
