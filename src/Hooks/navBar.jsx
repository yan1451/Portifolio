import { useState } from 'react';

export function useIndex() {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return {
    isActive,
    onClick,
  }
}