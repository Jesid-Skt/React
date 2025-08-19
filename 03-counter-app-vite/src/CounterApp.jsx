import { useState } from "react";
import propTypes from "prop-types";

export const CounterApp = () => {
  const [Counter, setCounter] = useState(0);
  const handleadd = () => {
    // setCounter( counter + 1 );
    setCounter((c) => c + 1);
  };
  const handless = () => {
    // setLess( lessCounter - 1 );
    setCounter((l) => l - 1);
  };

  return (
    <>
      <h1> CounterApp </h1>
      <h2> {Counter} </h2>

      <button onClick={handleadd}> +1 </button>
      <button onClick={handless}> -1 </button>
      <button onClick={() => setCounter(0)}> Reset </button>
    </>
  );
};

propTypes.CounterApp = {
  value: propTypes.number.isRequired,
};
