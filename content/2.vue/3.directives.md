---
title: Les directives
icon: mdi-reload
link: directives
---

<div id='directives'></div>

## Les directives

Lorsque vous utiliserez Vue vous allez rapidement vous heurter à des problèmes communs comme gérer une répétition de données, un conditionnement, vouloir passer une variable dans un attribut html plutôt que d'écrire sa valeur directement en dure, ...

Les directives nous fournissent un moyen standard pour résoudre les problèmes courants. Elles sont particulièrement puissantes et écrites afin que le code soit facile à comprendre. Les directives ressemblent à des attributs HTML avec une différence principale : elles disposent toutes du préfixe **v-**.

Ci-dessous vous trouverez une liste des directives les plus utiles:

### Conditionner l'affichage du contenu avec **v-if**

En Html vous aurez souvent le besoin d'afficher tel ou tel élément en fonction d'une situations ou de conditions. Par exemple je ne souhaite afficher le bouton Déconnexion que si mon utilisateur est connecté, c'est à dire que la data `userConnected === true`. Dans le cas contraire j'afficherai un bouton de connexion. On utilisera alors les directives **v-if**, **v-else-if** ou **v-else**.

```html
<button v-if="userConnected === true">Deconnexion</button>
<button v-else>Connexion</button>
```

_Attention: le texte situé entre les guillemets d'une directive est interprété comme du javascript et non comme du texte dans le cas d'un attribut html habituel._

### Boucler sur votre contenu avec **v-for**

Admettons que vous deviez répéter un élément Html plusieurs fois. Par exemple en cherchant à afficher une liste dont vous ne connaissez pas nécessairement le nombre d'éléments ou si ce nombre peut varier à tout instant. Vous n'allez pas répéter les éléments Html une centaine de fois, vous allez dans la plupart des langages passer par une boucle, ici c'est pareil avec **v-for**.

```html
<div id="app">
  <ul>
    <li v-for="item in shoppingCart">{{ item.label }} : {{ item.cost }}€</li>
  </ul>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      shoppingCart: [
        { label: 'Pommes', cost: 6 },
        { label: 'Bananes', cost: 2 },
        { label: 'Noix de coco', cost: 8 },
      ],
    },
  })
</script>
```

### Définissez des attributs HTML de façon dynamique avec **v-bind:**

Comme expliqué durant l'explication du **v-if**, le texte entre les guillemets des directives est interprété comme du javascript et non du texte. Vous aurez parfois envie que dans le cas des attributs Html classique ce soit aussi le cas.

Par exemple si vous cherchez à définir une liste de liens. Vous allez devoir utiliser la balise `<a>` ainsi que la directive **v-for** pour afficher la totalité de vos liens. Cependant il va surtout falloir remplir l'attribut **href** de la balise `<a>` qui attend de recevoir une chaîne de caractère et non une variable. C'est là qu'intervient la directive **v-bind:**.

```html
<div id="app">
  <a v-for="item in apiResponse" v-bind:href="item.url">{{ item.name }}</a>
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      apiResponse: [
        { name: 'GitHub', url: 'https://www.github.com' },
        { name: 'Twitter', url: 'https://www.twitter.com' },
        { name: 'Netlify', url: 'https://www.netlify.com' },
      ],
    },
  })
</script>
```

_Remarque: La directive **v-bind:** peut aussi être écrite via son raccourci «**:**». Cequi donnera par exemple ceci: `<a :href="item.url"></a>.`_

### Ecouter et emettre des évènements avec **v-on**

Si vous souhaitez écouter des évènements et réagir à eux à l'aide d'une fonction vous pouvez utiliser la directive **v-on**. On précise la nature de l'évènement écouté, par exemple un clic et on passe en valeur la fonction ou le code javascript qui sera executé.

```html
<div id="app">
  <button v-on:click="alert('Hello')">Click me</button>
</div>
```

_Remarque: La directive **v-on:** peut aussi être écrite via son raccourci «**@**». Cequi donnera par exemple ceci: `button @click="alert('hello')">Click me</button>.`_

### Mettez à jour les données dans des formulaires avec **v-model**

Lorsque l'on travaille avec des formulaires, on préfère mettre à jour le data store en conséquence. Cela nous permet d'effectuer des tâches telles que lancer une validation, des calculs, etc.

**v-model** permet de définir la propriété data que vous souhaitez mettre à jour lorsque l'utilisateur interagit avec un formulaire.

```html
<div id="app">
  <label for="username">Nom d'utilisateur</label>
  <input id="username" type="text" v-model="username" />
  <label for="pw">Mot de passe</label>
  <input id="pw" type="password" v-model="password" />
</div>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      username: '',
      password: '',
    },
  })
</script>
```

Maintenant, à chaque fois que l'utilisateur saisira des données dans les inputs correspondants, le data store sera mis à jour en conséquence !

---

</div>
