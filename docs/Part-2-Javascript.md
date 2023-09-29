
# Fête de la science Epitech - Partie 2

## Création du fichier PlayerList.js

Dans cette partie, nous allons créer le fichier `PlayerList.js`, dans le sous dossier /datasport/src/components/.

Ce fichier sera essentiel pour notre application web, car il gérera l'affichage de la liste des joueurs de baseball.

### 1 - Importation des modules React

Pour commencer, nous allons importer les modules React nécessaires dans notre fichier `PlayerList.js` et initialiser certaines variables.


    import React, { useState } from 'react';
    
    function PlayerList({ players }) {
        const [search, setSearch] = useState('');
        const [positionFilter, setPositionFilter] = useState('');
        const [sortOrder, setSortOrder] = useState('');
        const [sortBy, setSortBy] = useState('');
      
    

-   `import React, { useState } from 'react';` : Nous importons React et la fonction `useState` qui nous permettra de gérer l'état de notre composant.

### 2 - Filtrage et tri des joueurs

Nous allons maintenant ajouter le code qui filtrera et triera la liste des joueurs en fonction de certains critères, tels que la recherche par nom, la position et le tri par moyenne (AVG) ou points marqués (RBI).


    `const sortedAndFilteredPlayers = players
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
    
            //setSortOrder('asc');
          } else {
            setSortOrder('desc');
          }
        };` 

-   Nous utilisons la méthode `filter` pour afficher uniquement les joueurs qui correspondent aux critères de recherche et de position.
-   Ensuite, nous utilisons la méthode `sort` pour trier les joueurs en fonction de la moyenne (AVG) ou des points marqués (RBI).
-   Pour finir, nous déclarons une fonction `handleColumnClick` qui gère le tri des données lorsque l'utilisateur clique sur les en-têtes de colonne.
> Un petit problème s'est glissé dans cette dernière fonction !

### 3 - Gestion des interactions utilisateur

Maintenant, nous allons ajouter le code qui gère les interactions utilisateur, telles que la recherche par nom, la sélection de la position et le tri des données.


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
				      <option key={pos}  value={pos}>{pos}</option>  
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

-   Nous utilisons des éléments HTML tels que `<input>` et `<select>` pour permettre à l'utilisateur de filtrer les données.
-   Nous gérons également le tri des données lorsque l'utilisateur clique sur les en-têtes de colonne.

### 4 - Nous refermons la fonction `PlayerList`

    }

    export default PlayerList;

- Ainsi, nous exportons notre composant `PlayerList` pour pouvoir l'utiliser dans notre application.

## Et voila !
Ce fichier `PlayerList.js` est essentiel pour afficher la liste des joueurs de baseball dans notre application.
Maintenant, vous allez pouvoir démarrer l'application web que vous venez de terminer et comparer les différents joueurs de baseball en fonction de leurs statistiques.