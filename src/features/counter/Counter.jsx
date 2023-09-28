import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addAmount } from "./counterSlice";
import { useState } from "react";

export default function Counter() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <br />
      <input
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => dispatch(addAmount(amount))}>Add Amount</button>
    </div>
  );
}
