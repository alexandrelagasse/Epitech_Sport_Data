import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PlayerList from './components/PlayerList';

import data from './data.json';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(data);
  }, []);

  return (
    <div>
      <Header />
      <PlayerList players={players} />
    </div>
  );
}

export default App;
