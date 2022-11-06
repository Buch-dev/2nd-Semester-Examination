import { useState } from 'react'
import { useErrorHandler } from "react-error-boundary";

const MAX_COUNT_ALLOWED = 10;

function useCounter(initialCount = 0, count) {
  const [value, setValue] = useState(initialCount);
  const handleError = useErrorHandler()

  const increment = () => {
    try {
      if (value === MAX_COUNT_ALLOWED) {
        throw new Error("Count limit exceeded");
      } else {
        setValue(prevCount => prevCount + count);
      }
    } catch (error) {
      handleError(error)
    }
  };

  const decrement = () => {
    setValue(prevCount => prevCount - count);
  };

  const reset = () => {
    setValue(0);
  };

  return [value, increment, decrement, reset]
}

export default useCounter