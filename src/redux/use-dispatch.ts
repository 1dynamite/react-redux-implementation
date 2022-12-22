import { useContext } from "react";
import { StoreContext } from "./provider";

export default function useDispatch() {
  const store = useContext(StoreContext);

  if (store === undefined) throw new Error("Store object is undefined");

  return store.dispatch;
}
