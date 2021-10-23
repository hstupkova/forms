import { useState } from 'react';

const useInputMine = (validation) => {
  const [valueTyped, setValueTyped] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  const valueIsValid = validation(valueTyped);
  const inputIsInvalid = !valueIsValid && inputTouched;

  const inputChangeHandler = (event) => {
    setValueTyped(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputTouched(true);
  };

  const valueReset = () => {
    setValueTyped('');
  }

  const blurReset = () => {
    setInputTouched(false);
  }

  return {
    valueTyped,
    isValid: valueIsValid,
    inputInvalid: inputIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    valueReset,
    blurReset
  };
};

export default useInputMine;