import json
import random


random.seed(42)

# Liste des prénoms et noms de famille
prenoms = ["Gabriel", "Léo", "Raphaël", "Maël", "Louis", "Noah", "Jules", "Arthur", "Adam", "Lucas", "Liam", 
           "Sacha", "Isaac", "Gabin", "Éden", "Hugo", "Naël", "Aaron", "Mohamed", "Léon", "Paul", "Noé", 
           "Marceau", "Ethan", "Nathan", "Théo", "Tom", "Nino", "Marius", "Ayden", "Malo", "Mathis", "Gaspard", 
           "Martin", "Lyam", "Victor", "Rayan", "Elio", "Timéo", "Eliott", "Milo", "Robin", "Tiago", "Valentin", 
           "Ibrahim", "Axel", "Augustin", "Amir", "Enzo", "Imran", "Jade", "Louise", "Ambre", "Alba", "Emma", 
           "Rose", "Alice", "Romy", "Anna", "Lina", "Léna", "Mia", "Lou", "Julia", "Chloé", "Alma", "Agathe", 
           "Iris", "Inaya", "Charlie", "Juliette", "Léa", "Victoire", "Luna", "Giulia", "Adèle", "Jeanne", "Nina", 
           "Éva", "Olivia", "Zoé", "Léonie", "Romane", "Victoria", "Nour", "Lya", "Inès", "Lucie", "Lyana", 
           "Lola", "Alix", "Charlotte", "Mila", "Sofia", "Louna", "Margaux", "Ava", "Éléna", "Emy", "Mya"]

noms_de_famille = ["Martin", "Bernard", "Thomas", "Petit", "Robert", "Richard", "Durand", "Dubois", "Moreau", 
                   "Laurent", "Simon", "Michel", "Lefebvre", "Leroy", "Roux", "David", "Bertrand", "Morel", 
                   "Fournier", "Girard", "Bonnet", "Dupont", "Lambert", "Fontaine", "Rousseau", "Vincent", "Muller",
                   "Lefevre", "Faure", "Andre", "Mercier", "Blanc", "Guerin", "Boyer", "Garnier", "Chevalier",
                   "Francois", "Legrand", "Gauthier", "Garcia", "Perrin", "Robin", "Clement", "Morin", "Nicolas",
                   "Henry", "Roussel", "Mathieu", "Gautier", "Masson"]

positions = ["Lanceur", "Attrapeur", "Première base", "Deuxième base", "Troisième base", "Shortstop", "Left fielder", 
             "Center fielder", "Right fielder", "Batteur désigné"]

joueurs = []

# Générer 1000 joueurs
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

# Écrire le fichier JSON
with open('datasport/src/data.json', 'w', encoding="utf-8") as file:
    json.dump(joueurs, file, ensure_ascii=False, indent=4)

print("JSON généré avec succès!")
