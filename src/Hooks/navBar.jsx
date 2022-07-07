import { useRef, useState } from 'react';

export function useIndex() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return {
    isActive,
    onClick,
    dropDownRef
  }
}