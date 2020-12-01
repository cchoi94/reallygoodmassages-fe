import { useState } from 'react';

export const useSideDescription = () => {
  const [isSideDescriptionShown, setIsSideDescriptionShown] = useState(false);
  return {
    isSideDescriptionShown,
    setIsSideDescriptionShown,
  };
};
