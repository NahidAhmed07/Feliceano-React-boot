import { useEffect, useState } from "react";

const useCounter = (countStart = 0, countEnd = 10) => {
  const [counter, setCounter] = useState(countStart);
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === countEnd - 1) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  },[]);
  return [counter, setCounter];
};

export default useCounter;
