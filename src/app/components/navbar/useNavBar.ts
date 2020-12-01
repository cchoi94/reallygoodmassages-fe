import { useState } from 'react';

export const useNavBar = () => {
  const [isHambugerMenuOpen, setIsHambugerMenuOpen] = useState(false);

  return {
    isHambugerMenuOpen,
    setIsHambugerMenuOpen,
  };
};
