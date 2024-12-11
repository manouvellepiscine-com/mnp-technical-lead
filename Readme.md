# manouvellepiscine.com
Ce projet est un exemple d'application type ToDo list, réalisé dans le cadre des entretiens techniques pour le poste de lead développeur chez manouvellepiscine.com.

## Installation

### Prérequis
Les prérequis pour installer l'application sont les suivants:

- Docker & Docker compose
- Node.js et npm
- [EdgeDB CLI](https://docs.edgedb.com/get-started/cli)
- [Bun](https://bun.sh/docs/installation)

### Installation
Pour installer l'application, commencer par cloner le repository sur votre machine :

```bash
git clone git@github.com:manouvellepiscine-com/[project].git
cd [project]
```

Ensuite, il est nécessaire de lancer la base de données EdgeDB une première fois pour introspecter le schéma. Les scripts NPM sont disponibles dans le fichier `package.json` à la racine du projet :

```bash
npm run start.database
```

Enfin, il est nécessaire de générer les bindings ORM pour l'application backend :

```bash
npm run edgedb.generate
```

## Utilisation
Une fois le projet initialisé, il est possible de lancer toutes les applications avec les commandes suivantes :

```bash
docker compose up
```

ou en utilisant npm :

```bash
npm start
```

## Objectifs
Le code comporte certains commentaires TODO qui indiquent une base de fonctionnalités à implémenter, mais vous pouvez prendre en compte ces commentaires comme des suggestions et ajouter des fonctionnalités supplémentaires si vous le souhaitez.

### Frontend
L'objectif du test est de réaliser une application de type ToDo list en utilisant Qwik. L'application doit permettre de créer, modifier et supprimer des tâches. Les tâches doivent être rattachées à une liste de tâches. Les tâches doivent pouvoir être drag & drop-able pour changer leur ordre dans la liste.

Le code est parfois volontairement cru ou mal formé, il est recommandé de le refactoriser pour le rendre plus propre et plus lisible.

### Backend
L'objectif du test est de réaliser une API RESTful en utilisant EdgeDB. L'API doit permettre de créer, modifier et supprimer des listes de tâches et des tâches. Les tâches doivent être rattachées à une liste de tâches. L'API doit permettre au front de récupérer les données nécessaires, et de les modifier.

### Base de données
La base de données doit permettre de stocker les listes de tâches et les tâches. Les tâches doivent être rattachées à une liste de tâches.

## Rendu
Le rendu du test doit être effectué sous forme de branche sur le repository d'origine. Le rendu doit contenir le code source de l'application, ainsi que les instructions pour l'installation et l'utilisation de l'application dans un Readme modifié si besoin.