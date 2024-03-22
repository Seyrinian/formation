---
title: l'Instance Vue JS
icon: mdi-vuejs
link: instance
---

<div id='instance'></div>

## L'instance de vue

Si vous souhaitez afficher votre instance de vue depuis la console tapez _vm_. Nous allons étudier certaines des propriétés de l'instance de Vue qui vont nous être utile.

### La propriété **data**

Dans la plupart des applications il est rapidement nécessaire de stocker des données. Dans la majorité des langages utilisés nous utilisons des variables ici c'est assez similaire même si on va utiliser la notion de data store (magasin de données). En effet l'instance de notre application Vue va prendre un nouvel attribut: _data_. On dit aussi que la data correspond à l'**état** de notre application.

Si on initialise une propriété ici alors on lui donnera sa valeur par défaut.

Par exemple nous cherchons à rentrer les prix d'une liste de produits:

```javascript
const app = new Vue({
  el: '#app',
  data: {
    costOfApples: 6,
    costOfBananas: 2,
    costOfCoconuts: 8,
  },
})
```

_Remarque: En analogie avec le Java, lorsqu'on renseigne des propriétés dans le paramètre data; Vue créera alors les getter/setters associés à cette variable et seront implicitement appelé lors qu'on utilise la variable. Ainsi si on la lit, c'est en réalité son getter qui est appelé, si on la modifie c'est son setter._

### La propriété _computed_

Les propriétés calculées **computed** nous permettent de définir une valeur réutilisable qui est mise à jour en fonction d'autres propriétés du paramètre **data**. Comme pour la propriété **data**, nous commençons par ajouter une propriété calculée qui utilise un objet pour définir les propriétés que nous voulons.

```javascript
const app = new Vue({
  el: '#app',
  data: {
    costOfApples: 6,
    costOfBananas: 2,
    costOfCoconuts: 8,
  },
  computed: {
    totalAmount() {
      return this.costOfApples + this.costOfBananas + this.costOfCoconuts
    },
  },
})
```

### La propriété _method_

Comme dans de nombreux autres languages objets nous avons accès ici à la déclaration de _methods_. Elle peuvent ou non retourner un résultat. Tâchons de définir une fonction qui cherche à donner le cumul de prix de deux produits.

On définira la méthode comme suit:

```javascript
const app = new Vue({
  el: '#app',
  methods: {
    addAmount: function (product1, product2) {
      return product1 + product2
    },
  },
})
```

_Remarque: Vous avez peut-être déjà vu les déclarations de fonctions fléchées (voir exemple ci-dessous). Il est fortement déconseillé d'utiliser ce typ de déclération pour les méthodes. En effet vous allez souvent avoir besoin du mot clé ***this***, cependant une fonction fléchées est une fonction anonyme et this n'existe donc pas. Préférez la méthode habituelle._

```javascript
// exemple de déclaration de fonction fléchées
    addAmount: (product1, product2) => {
      return product1 + product2
    },
```

### Utilisation de data, computed ou method dans le template

Lorsque nous voulons afficher nos données dans notre application web, Vue utilise la syntaxe entre deux accolades pour afficher le rendu des données.

Cette notation en accolade permet en réalité d'exprimer du js à l'intérieur.

Elle est représentée comme indiqué ci-dessous :

```html
<div id="#app">
  <h2>Panier</h2>
  <ul>
    <li>Pommes: {{ costOfApples }}€</li>
    <li>Bananes: {{ costOfBananas }}€</li>
    <li>Noix de coco: {{ costOfCoconuts }}€</li>
  </ul>
</div>
```

_Remarque: Encore plus intéressant, si la data est modifiée à un moment dans notre application alors notre page mettra directement l'affichage à jour._

---

</div>
