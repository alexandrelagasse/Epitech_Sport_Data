import React, { useState } from 'react';

function PlayerList({ players }) {
    const [search, setSearch] = useState('');
    const [positionFilter, setPositionFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [sortBy, setSortBy] = useState('');
  
    const sortedAndFilteredPlayers = players
      .filter(player => {
        return (
          (!search || player.nom.toLowerCase().includes(search.toLowerCase())) &&
          (!positionFilter || player.position === positionFilter)
        );
      })
      .sort((a, b) => {
        if (sortBy === 'AVG') {
          return sortOrder === 'asc' ? a.AVG - b.AVG : b.AVG - a.AVG;
        } else if (sortBy === 'RBI') {
          return sortOrder === 'asc' ? a.RBI - b.RBI : b.RBI - a.RBI;
        }
        return 0;
      });
  
    const handleColumnClick = column => {
      setSortBy(column);
      if (sortOrder === '' || sortOrder === 'desc') {

        // La balise // permet de mettre un commentaire dans javascript

        //setSortOrder('asc');
      } else {
        setSortOrder('desc');
      }
    };

  return (
    <div className="container mt-4">
      <h2>Liste des Joueurs</h2>

      <div className="filters mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher par nom"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          className="form-control mt-2"
          value={positionFilter}
          onChange={e => setPositionFilter(e.target.value)}
        >
          <option value="">Toutes les positions</option>
          {[...new Set(players.map(player => player.position))].map(pos => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Position</th>
            <th
              onClick={() => handleColumnClick('AVG')}
              style={{ cursor: 'pointer' }}
            >
              AVG {(sortBy === 'AVG' && sortOrder === 'asc') ? '↑' : (sortBy === 'AVG' && sortOrder === 'desc') ? '↓' : ''}
            </th>
            <th
              onClick={() => handleColumnClick('RBI')}
              style={{ cursor: 'pointer' }}
            >
              RBI {(sortBy === 'RBI' && sortOrder === 'asc') ? '↑' : (sortBy === 'RBI' && sortOrder === 'desc') ? '↓' : ''}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredPlayers.map(player => (
            <tr key={player.id}>
                {/*

                La balise td permet de créer une cellule dans un tableau
                affiche:
                Player nom
                Player position
                Player AVG
                Player RBI
                 */
                 }
                
              <td>{player.nom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerList;
