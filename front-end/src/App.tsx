import React from 'react';
import { Button, GhostButton } from './components/Button';

function App(): JSX.Element {
  return (
    <div>
      <Button>LOGIN</Button>
      <GhostButton>LOGIN</GhostButton>
    </div>
  );
}

export default App;
