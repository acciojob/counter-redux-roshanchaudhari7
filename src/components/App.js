
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "../redux/counterActions";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> Counter : {count}</h1>
      <button onClick={() =>
        dispatch(increment())
      }>Increment</button>
      <button onClick={() =>
        dispatch(decrement())
      }>Decrement</button>
    </div>
  )
}

export default App
