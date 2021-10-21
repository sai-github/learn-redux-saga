import React from "react";
import "./App.css";

// ...
import { useDispatch, useSelector } from "react-redux";

import { incr, decr } from "./redux/actions/counterActions";

import Counter from "./components/Counter";
import RandomPerson from "./components/RandomPerson";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <div>Learn redux Saga</div>
      <Counter
        value={counter.count}
        onIncrement={() => dispatch(incr())}
        onDecrement={() => dispatch(decr())}
      />
      <hr />
      <RandomPerson />
    </div>
  );
}

export default App;
