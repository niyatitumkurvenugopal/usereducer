import React, { useReducer } from "react";

let initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
let reducer = (prevState, action) => {
  switch (action.type) {
    case "increment1":
      return {
        ...prevState,
        firstCounter: prevState.firstCounter + 1,
      };
    case "decrement1":
      return {
        ...prevState,
        firstCounter: prevState.firstCounter - 1,
      };
    case "reset1":
      return {
        ...prevState,
        firstCounter: initialState.firstCounter,
      };
    case "increment2":
      return {
        ...prevState,
        secondCounter: prevState.secondCounter + 1,
      };
    case "decrement2":
      return {
        ...prevState,
        secondCounter: prevState.secondCounter - 1,
      };
    case "reset2":
      return {
        ...prevState,
        secondCounter: initialState.secondCounter,
      };
    default:
      return {
        ...prevState,
      };
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <p>CounterOne : {state.firstCounter} </p>

        <button onClick={() => dispatch({ type: "increment1" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement1" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset1" })}>Reset</button>
      </div>

      <div>
        <p>CounterTwo: {state.secondCounter} </p>

        <button onClick={() => dispatch({ type: "increment2" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement2" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset2" })}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;





// error boundary
// HOC 
// useCallback 
// useMemo 
// useReducer


// https://technoelevate-ess-lite.netlify.app/achievements
//  (no code duplication_ submission on monday-10 JAN, 10:00 AM)


