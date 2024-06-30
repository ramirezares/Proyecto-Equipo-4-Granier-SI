import { useState } from "react";

export function usePassword() {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("password");
  const [eye, setEye] = useState("/path/to/eye-close.png");

  function handlePasswordClick() {
    setIsVisible(!isVisible);
    if (isVisible) {
      setPassword("text");
      setEye("/path/to/eye-open.png");
    } else {
      setPassword("password");
      setEye("/path/to/eye-close.png");
    }
  }

  return { isVisible, password, eye, handlePasswordClick };
}
