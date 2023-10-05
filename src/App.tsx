import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Slice/Slice";

function App() {
  const select = useSelector((state: any) => state.counterSlice.counter);
  const dispatch = useDispatch();
  const Addfun = () => {
    dispatch(increment(""));
  };
  const deletefun = () => {
    dispatch(decrement(""));
  };

  return (
    <>
      <p>{select}</p>
      <button onClick={() => Addfun()}>ADD </button>
      <button onClick={deletefun}>delete </button>
    </>
  );
}

export default App;
