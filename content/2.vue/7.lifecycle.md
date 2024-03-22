---
title: Cycle de vie d'un composant
icon: mdi-recycle
link: lifecycle
---

<div id='lifecycle'></div>

## Cycle de vie des composants

La plupart des frameworks utilisent le concept de cycle de vie des composants (components lifecycle), qui définit une série d'étapes par lesquelles un composant passe, de sa création à sa disparition. En effet on veut parfois exécuter du code uniquement à un moment donné soit parce que l'on attend quelque chose ou parce qu'on ne veut pas alourdir l'execution du code en effectuant des actions à des moments inutile.

Il existe 3 étapes majeures dans le cycle de vie d'un composant :

- **Create** : qui représente la durée pendant laquelle le composant est en construction.
- **Mount** : qui représente le moment durant lequel le composant va être rendu sur notre page.
- **Destroy** : qui représente le moment où le composant va être retiré de la page.

Ci-dessous vous trouverez un graphique complet du cycle de vie d'un composant. Vous trouverez d'ailleurs d'autres étapes moins communes que les 3 citées.

<article-image src="component-lifecycle.png" alt="component-lifecycle"></article-image>

### Les hooks de cycle de vie

Les hooks de cycle de vie sont des propriétés de l'instance d'un composant et permettent d'accéder à des événements spécifiques autour de ces étapes. Nous pouvons ainsi réaliser des actions comme déclencher du code qui fait appel à la base de donnée, avant même l'apparition du composant sur la page. Les principaux hooks que nous verrons ici sont les suivants :

- beforeCreate
- created
- beforeMount
- mounted
- beforeDestroy
- destroyed

### Utiliser un hook de cycle de vie

C'est très similaire à ce qui a été fait avec data ou les methods. Il suffit simplement d'indiquer le hook dans notre composant et d'indiquer ensuite les actiosn qui seront réalisés à ce moment.

```vue
<template>
  <h1>Je suis un composant !</h1>
</template>

<script>
export default {
  data: { msg: 'Bonjour !' },
  beforeCreate() {
    console.log('Je ne suis pas encore  créé')
  },
  created() {
    console.log('Je suis créé !')
  },
  beforeMount() {
    console.log('Je vais bientôt être monté sur le DOM!')
  },
  mounted() {
    console.log('Je suis monté sur le DOM!')
  },
  beforeDestroy() {
    console.log('Je suis sur le point de disparaître du DOM !')
  },
  destroyed() {
    console.log('Je suis supprimé')
  },
}
</script>
```

---

</div>
