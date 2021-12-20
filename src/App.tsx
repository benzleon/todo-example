import React, { createContext, SetStateAction } from "react";
import "./App.css";
import { Todos } from "./Todo";

export const ctx = createContext<
  [string, React.Dispatch<SetStateAction<string>>]
>(["", () => {}]);

function App() {
  const [val, setVal] = React.useState("");

  return (
    <ctx.Provider value={[val, setVal]}>
      <Todos />
    </ctx.Provider>
  );
}

export default App;
