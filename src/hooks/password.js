import { useState } from "react";

export function usePassword() {
  const [isVisible, setIsVisible] = useState(false);
  const [eye, setEye] = useState("/path/to/eye-close.png");

  function handlePasswordClick() {
    setIsVisible(!isVisible);
    if (isVisible) {
      setEye("/path/to/eye-open.png");
    } else {
      setEye("/path/to/eye-close.png");
    }
  }

  return { isVisible, eye, handlePasswordClick };
}
