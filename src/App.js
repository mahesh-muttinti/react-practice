import React from "react";
import "./style.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
export default function App() {
  return (
    <div>
      <Greeting name="This is a Simple Counter" />
      <Counter />
    </div>
  );
}
