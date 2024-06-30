import { useState } from "react";

export function useRequired() {
  const [isSubmit, setIsSubmit] = useState(false);

  function handleButtonClick() {
    setIsSubmit(!isSubmit);
  }

  return { isSubmit, setIsSubmit, handleButtonClick };
}
