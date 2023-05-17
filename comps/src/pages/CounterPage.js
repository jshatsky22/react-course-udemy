import { produce } from "immer"; // called when calling useReducer()
import Button from ".././components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment-count";
const SET_VALUE_TO_ADD = "change-value-to-add";
const DECREMENT_COUNT = "decrement-count";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  // use a switch statement for the case in which action.type is equal to each of the values
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1; // immer allows me to manipulate state directly
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.valueToAdd + state.count; // keep the logic in the reducer primarily, to avoid needing to duplicate into each event handler
      state.valueToAdd = 0;
      return;
    default:
      console.warn("Unexpected action type: ", action.type);
      return;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  // call produce(reducer) to use immer
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  console.log(state);

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
    // setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        ></input>
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
