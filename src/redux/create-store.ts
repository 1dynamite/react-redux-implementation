export default function createStore<State, Action>(
  reducer: (state: State, action: Action) => State,
  initialState: State
) {
  let state = initialState;
  const listeners: (() => void)[] = [];

  const getState = () => state;

  const dispatch = (action: Action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.push(listener);

    return () => {
      const index = listeners.indexOf(listener);
      if (index === -1) return;
      listeners.splice(index, 1);
    };
  };

  return { getState, dispatch, subscribe };
}
