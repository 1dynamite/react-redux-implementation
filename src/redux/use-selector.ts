/* 
This hook is probably the most important functionality here because this is where react components
are subscribed to store updates and this is something that we did not implement in our last homework.
*/

import { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "./provider";
import store from "../app/store";

type State = ReturnType<typeof store.getState>;

export default function useSelector<SelectedState>(
  selector: (state: State) => SelectedState
) {
  const store = useContext(StoreContext);

  if (store === undefined) throw new Error("Store object is undefined");

  //it will grab the 1st selector that's passed in during the 1st render
  const initialSelector = useRef(selector);

  const [selectedState, setSelectedState] = useState(
    initialSelector.current(store.getState())
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(() =>
      setSelectedState(initialSelector.current(store.getState()))
    );

    return unsubscribe;
  }, [store]);

  return selectedState;
}
