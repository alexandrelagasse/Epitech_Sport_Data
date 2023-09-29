# Fête de la science Epitech part-1

## Python 

Python est un langage de programmation populaire et puissant utilisé dans de nombreux domaines, y compris la programmation de jeux, la création de sites Web, la science des données et plus encore. Voici comment installer Python sur votre ordinateur.

### Installation

#### Windows

1. Téléchargez le programme d'installation de Python à partir de [python.org](https://www.python.org/downloads/).
2. Exécutez le programme d'installation.
3. Cochez la case "Add Python 3.x to PATH" (Ajouter Python 3.x au PATH).
4. Cliquez sur "Install Now" (Installer maintenant).
5. Cliquez sur "Disable path length limit" (Désactiver la limite de longueur du chemin).
6. Cliquez sur "Close" (Fermer).
7. Ouvrez l'invite de commande et tapez `python` pour vérifier que Python est installé correctement.
8. Tapez `exit()` pour quitter l'interpréteur Python.
9. Tapez `python --version` pour vérifier la version de Python.
10. Tapez `pip --version` pour vérifier la version de pip.

## Création de votre générateur de données de sport

### Création du projet

1. Ouvrez le dossier dans VS Code qui est dans le bureau nom : fête de la science.
2. Ouvez le  fichier `joueur.py`.

Maintenant que vous avez créé votre projet, vous pouvez commencer à écrire du code.

Vous allez importer les 2 paquets nécessaires à votre projet : json et random.

### Importation des paquets

1. Ouvrez le fichier `joueur.py`.
2. Importez le paquet json en tapant `import json`.
3. Importez le paquet random en tapant `import random`.
4. ajouter la ligne random.seed(42) pour que les données générées soient toujours les mêmes.

Maintenant que vous avez importer vos paquets, nous allons commencer par ajouter vos liste de donner.

### Ajout des listes de données

```bash
# Ajout des listes de données

prenoms = ["Gabriel", "Léo", "Raphaël", "Maël", "Louis", "Noah", "Jules", "Arthur", "Adam", "Lucas", "Liam", 
           "Sacha", "Isaac", "Gabin", "Éden", "Hugo", "Naël", "Aaron", "Mohamed", "Léon", "Paul", "Noé", 
           "Marceau", "Ethan", "Nathan", "Théo", "Tom", "Nino", "Marius", "Ayden", "Malo", "Mathis", "Gaspard", 
           "Martin", "Lyam", "Victor", "Rayan", "Elio", "Timéo", "Eliott", "Milo", "Robin", "Tiago", "Valentin", 
           "Ibrahim", "Axel", "Augustin", "Amir", "Enzo", "Imran", "Jade", "Louise", "Ambre", "Alba", "Emma", 
           "Rose", "Alice", "Romy", "Anna", "Lina", "Léna", "Mia", "Lou", "Julia", "Chloé", "Alma", "Agathe", 
           "Iris", "Inaya", "Charlie", "Juliette", "Léa", "Victoire", "Luna", "Giulia", "Adèle", "Jeanne", "Nina", 
           "Éva", "Olivia", "Zoé", "Léonie", "Romane", "Victoria", "Nour", "Lya", "Inès", "Lucie", "Lyana", 
           "Lola", "Alix", "Charlotte", "Mila", "Sofia", "Louna", "Margaux", "Ava", "Éléna", "Emy", "Mya"]
```

```bash
noms_de_famille = ["Martin", "Bernard", "Thomas", "Petit", "Robert", "Richard", "Durand", "Dubois", "Moreau", 
                   "Laurent", "Simon", "Michel", "Lefebvre", "Leroy", "Roux", "David", "Bertrand", "Morel", 
                   "Fournier", "Girard", "Bonnet", "Dupont", "Lambert", "Fontaine", "Rousseau", "Vincent", "Muller",
                   "Lefevre", "Faure", "Andre", "Mercier", "Blanc", "Guerin", "Boyer", "Garnier", "Chevalier",
                   "Francois", "Legrand", "Gauthier", "Garcia", "Perrin", "Robin", "Clement", "Morin", "Nicolas",
                   "Henry", "Roussel", "Mathieu", "Gautier", "Masson"]
```

```bash
positions = ["Lanceur", "Attrapeur", "Première base", "Deuxième base", "Troisième base", "Shortstop", "Left fielder", 
             "Center fielder", "Right fielder", "Batteur désigné"]
             
joueurs = []
```

### Création de la partie de génération de données

```bash
# Création de la partie de génération de données

for i in range(1000):
    joueur = {
        "id": i + 1,
        "nom": f"{random.choice(prenoms)} {random.choice(noms_de_famille)}",
        "position": random.choice(positions),
        "AVG": round(random.uniform(0.200, 0.350), 3),
        "RBI": random.randint(20, 60),
        "valeur": random.randint(5, 15)
    }
    joueurs.append(joueur)

```

### Création du fichier JSON

```bash
with open('datasport/src/data.json', 'w', encoding="utf-8") as file:
    json.dump(joueurs, file, ensure_ascii=False, indent=4)
```

### affichage du fichier JSON

```bash
print("JSON généré avec succès!")
```

### Exécution du programme dans le terminal

Pour ouvrir le terminal, cliquez sur le menu Terminal, puis sur New Terminal.

```bash
python3 joueur.py
```

Bravo vous avez généré votre fichier JSON.






