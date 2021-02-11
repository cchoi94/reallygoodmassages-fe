import React from 'react';
import { AuthWrapper } from 'app/components/auth/authWrapper/authWrapper';

interface OwnProps {
  toggleUserPannel: (isOpen: boolean) => void;
  favoriteMassages: string[];
}

export const FavoriteMassages: React.FC<OwnProps> = ({
  toggleUserPannel,
  favoriteMassages,
}) => {
  return (
    <AuthWrapper wasSigninClicked={isOpen => toggleUserPannel(isOpen)}>
      Favourited massages
      <ul>
        {favoriteMassages.map(massage => (
          <li>{massage}</li>
        ))}
      </ul>
    </AuthWrapper>
  );
};
