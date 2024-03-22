---
title: Les outils de Build
icon: mdi-package-variant-closed
link: project
---

<div id='project'></div>

## Les outils de Build

Lorsqu'il s'agit de travailler sur des projets plus complexes on peut rapidement passer du temps sur la configuration même de notre projet, sur la minification du code pour l'envoyer en production, l'installation de dépendance, de library externe.

Fort heureusement

De nos jours, pour la plupart des frameworks connus, une interface en ligne de commande (CLI pour Command Line Interface) est obligatoire pour construire des applications en entreprise. Cela est notamment dû à la complexité qui entoure ces outils de build. Les outils CLI existent fondamentalement pour fournir aux développeurs une base standard facilitant le démarrage de projet. Ainsi, les développeurs consacrent davantage de temps à la construction de l'application plutôt qu'à sa configuration.

### Installer Vue-CLI

Pour commencer à utiliser la CLI de Vue, la version de Node 8.9 ou supérieure est nécessaire. Vous trouverez les liens d'installations plus haut.

Une fois Node installé vous avez accès au package NPM et vous pouvez donc appeler la fonction npm pour installer le package Vue CLI.

```text
npm install -g @vue/cli
```

Une fois les commandes vue installées et accessible on peut procéder à l'installation d'un projet Vue.

```text
vue create my-first-app
```

Vous serez alors invités à faire une selection de configuration. Par défaut prenez **Default (Vue2)**. Cela vous installera une liste de package npm de base pour démarrer correctement une application single page et ce sans vous complexifier avec la configuration.

Après l'installation vous obtenez un dossier avec la liste des fichiers/dossiers suivants:

- **node_modules** : contient l'ensemble des dépendances qui permettent à votre application de faire tout ce qu'elle fait. Vous n'aurez que rarement (sinon jamais) besoin d'aller dans ce dossier, car il n'est généralement pas attaché au repository, mais directement géré par npm.
- **public** : ce répertoire contient le favicon.ico et le fichier index.html de base qui serviront à générer le reste de votre application.
- **src** : ce répertoire est celui dans lequel vous passerez 99 % de votre temps, car la quasi-totalité de votre code y sera située. On y trouve les dossiers suivants:
  - Assets : il s'agit du répertoire dans lequel vous placerez les images et les autres ressources obligatoires auxquelles vous devrez peut-être faire référence dans votre application (c'est-à-dire les vidéos, les documents PDF, etc.).
  - Components : ce répertoire contiendra les composants de notre application. Si vous ne savez pas encore ce que sont les composants, ne vous inquiétez pas. Je traiterai ce sujet dans le prochain chapitre !
  - main.js : c'est ici que sont définies les options de configuration plus high-level de Vue. Ce fichier peut sembler légèrement différent de ce à quoi nous sommes habitués, mais l'instanciation d'une nouvelle application Vue devrait ressembler à ce que nous avons fait précédemment.
- **.gitignore** : ce fichier contient une liste de fichiers et/ou de répertoires qui ne seront pas attachés à un repository. Citons ici deux exemples courants avec le répertoire /dist, qui est généré de manière automatique à chaque build (et ne nécessite donc aucun suivi), et le répertoire node_modules, qui est automatiquement recréé à chaque lancement de la commande `npm install`.
- **package.json** : il s'agit du fichier de configuration de base de votre projet. Il comprend des métadonnées comme le nom et la version de votre projet, mais il contient également des informations essentielles comme les scripts pouvant être exécutés (comme serve, build, lint) et les dépendances requises pour votre projet :
  - serve : il s'agit du script qui permet de lancer une environnement de développement en local,
  - build : ce script permet de créer la version finale qui sera livrée à un client ou à l'utilisateur.
    \
    \
    Pour lancer votre application en local et la tester il suffit de lancer la commande suivante:

```text
npm run serve
```

_Remarque: Nous n'avons pas parlé du fichier App.vue cela est voulu il s'agit d'un composant monofichier ce qui sera le sujet du prochain chapitre._

_Remarque: Nous ne nous attardons pas plus en détails sur npm et les packages, le strict minimum est requis ici pour installer Vue CLI et l'utiliser. Si vous désirez en apprendre plus rendez-vous dans la partie [formation Node JS](/node) de ce site._

</div>
