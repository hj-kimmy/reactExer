import { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";
import MyComponent from "./MyComponent";
import RefSample from "./RefSample";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <Counter />
      {visible && <Info />}

      <Average />
      <MyComponent />
      <RefSample />
    </>
  );
};

export default App;
