import React from 'react';
import { Background } from './Style';

const UnauthorizedScreen = () => {
  const message = 'Acesso negado =(';
  return (
    <Background>
      <h1 color="black">
        {message}
      </h1>
    </Background>
  );
};

export default UnauthorizedScreen;
