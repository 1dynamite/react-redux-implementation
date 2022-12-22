import { createContext, ReactNode } from "react";
import store from "../app/store";

export const StoreContext = createContext<typeof store | undefined>(undefined);

export default function Provider(props: {
  store: typeof store;
  children: ReactNode;
}) {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
}
