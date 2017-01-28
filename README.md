Voilà a quoi devrait ressembler notre README :

```
# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
```


# Projet ToDo

## Principe

### But du Projet

La ToDo list pemettra **d'organiser** ses idées **facilement** en offrant une manière **ergonomique** de gérer les tâches à venir.

### Technologies utilisées
#### Back-end
 * Node.js
   * Express
   * Body-Parser
   * Joi
   * Lodash
   * Mongoose
   * String

#### Front-end
 * Vue.js

#### BD
* MongoDB

## Participants
 * Guillaume ROUSSEAU - **Shenrak**
 * Vincent GRANDIERE
 * Sami MAAROUF
 * François DAVID
 * Alexandre BUSATO

## I - Spécifications fonctionnelles


#### **A - User stories**

##### En tant que :
* **Utilisateur**
  * Je veux pouvoir **organiser et hiérarchiser** des idées/tâches au sein de blocs et sous blocs afin d’organiser mon travail
  * Je veux pouvoir **indenter librement** ces blocs afin d'apporter une classification efficace
  * Je veux pouvoir ajouter des **effets de style** aux caractères (Gras, souligné, Italique, police, taille, etc.) afin d’améliorer la lisibilité de ma To do list
  * Je veux pouvoir retrouver mes todolist après avoir fermé le navigateur (système **d’authentification** et de **sauvegarde**) afin de ne pas perdre le travail que j’ai fait.
  * Je veux pouvoir **drag and drop des blocs** afin de pouvoir basculer facilement des tâches d’une branche de ma todolist à une autre facilement.
  * Je veux pouvoir ajouter une tâche et modifier son contenu juste en **cliquant dessus** (sans passer par un formulaire) afin que l’outil soit plus rapide et facile à utiliser.
* **Chef de Projet**
  * Je veux pouvoir avoir une visibilité claire sur un certain nombre de tâches **successives** à accomplir dans le but de pouvoir m’organiser efficacement avec mon équipe.
  * Je veux pouvoir créer un compte et **m’authentifier** sur le site, afin que je puisse **choisir qui peut voir ma to-do-list**.
  * Je veux pouvoir **gérer les droits des personnes** dont j’ai autorisé l’accès auparavant (droit d’écriture, de lecture) afin que tout le monde ne puisse pas modifier ce qui a été fait.
  * Je veux pouvoir avoir un **historique des actions** qui ont été faites dans ma todolist (par qui, quand et quoi).  
* **Chef de Projet & Développeur**
  * Je veux pouvoir **noter le temps consacré à une tache** et l'associer à cette tâche (après l’avoir finie).
  * Je veux pouvoir **donner une valeur de temps** à chacune des tâches de ma to-do-list pour gérer les priorités

Nombre de points totaux : 100

L'objectif ici va être de répartir 100 points qui représente notre temps restant pour le projet, ces points vont être à répartir entre les différentes user stories.
Certaines user  stories ne seront pas implémentés en raison d'un choix de quel feature coder en fonction du temps que celle ci prend
