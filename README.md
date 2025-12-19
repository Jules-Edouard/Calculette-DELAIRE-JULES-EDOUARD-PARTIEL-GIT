## Opérations
- [x] Addition
- [x] Soustraction
- [X] Multiplication
# 🧮 Calculette JavaScript

## Présentation du projet

Ce projet est une **calculette simple développée en HTML, CSS et JavaScript**.  
Il a été réalisé dans le cadre d’un **travail pratique sur Git et GitHub**, avec pour objectif de mettre en place un workflow collaboratif utilisant plusieurs branches et des fusions contrôlées.

La calculette permet d’effectuer des opérations de base et a été développée de manière incrémentale, chaque fonctionnalité étant implémentée dans une branche dédiée.

---

## Fonctionnalités

### ➕ Addition
La calculette permet d’additionner deux nombres.  
L’utilisateur saisit un premier nombre, sélectionne l’opérateur d’addition, puis saisit le second nombre pour obtenir le résultat.

### ➖ Soustraction
La fonctionnalité de soustraction permet de calculer la différence entre deux nombres.  
Elle fonctionne sur le même principe que l’addition, avec un affichage dynamique du calcul et du résultat.

### ✖️ Multiplication
La multiplication permet de multiplier deux valeurs numériques.  
Cette opération a été ajoutée dans une branche de fonctionnalité distincte, puis fusionnée après validation.

---

## Interface utilisateur

- Interface simple et lisible
- Affichage de l’expression en cours
- Affichage du résultat
- Boutons numériques et opérateurs
- Support du clavier (chiffres, opérateurs, entrée)

---

## Organisation du projet

Le projet est structuré de la manière suivante :

- `index.html` : structure de la page
- `style.css` : mise en forme et design
- `calculator.js` : logique de la calculette
- `README.md` : documentation du projet

---

## Workflow Git utilisé

Le projet suit une organisation inspirée de GitFlow :

- `main` : branche stable
- `develop` : branche d’intégration
- `feature/addition` : ajout de l’addition
- `feature/substraction` : ajout de la soustraction
- `feature/multiplication` : ajout de la multiplication

Chaque fonctionnalité a été développée dans sa propre branche, puis fusionnée dans `develop`.  
Le fichier `README.md` a volontairement été modifié dans les mêmes zones afin de provoquer un conflit lors d’un merge, permettant de démontrer la résolution manuelle de conflits Git.

---

## Objectifs pédagogiques

- Comprendre le fonctionnement des branches Git
- Mettre en place un workflow propre (`main`, `develop`, `feature`)
- Gérer des conflits lors des fusions
- Utiliser GitHub comme dépôt distant
- Développer une application web simple en JavaScript

---

## Auteur

Projet réalisé par **Jules-Edouard DELAIRE**  
Dans le cadre d’un TP de développement et de gestion de versions avec Git et GitHub.

