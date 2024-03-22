---
title: Communiquer avec les props
icon: mdi-account-voice
link: props
---

<div id='props'></div>

## Les props et la communication entre composants

Bien que l'exemple ci-dessus soit utile car il peut être réutilisé, il est plutôt limité puisqu'il comporte une URL et un texte codés en dur. Imaginez si vous pouviez configurer les composants.

### Les props

Les props sont des attributs que vous pouvez définir à l'appel de votre composant. Une fois cela fait, lorsque votre composant sera construit, alors ces attributs seront transmis au template.

Prenons l'exemple de notre composant NavLink et transformons-le en un composant plus générique:

```vue
// ./components/NavLink.vue
<template>
  <a :href="url">{{ text }}</a>
</template>

<script>
export default {
  name: 'NavLink',
  props: ['url', 'text'],
}
</script>
```

Nous définissons deux props pour notre nouveau composant :

- url: qui alimentera notre attribut href
- text: qui remplira le texte qui vit dans la balise anchor.

Il sera utilisé comme ceci :

```vue
<script>
import NavLink from './components/NavLink.vue'

export default {
  name: 'App',
  components: {
    NavLink,
  },
}
</script>

<template>
  <div id="app">
    <nav>
      <NavLink url="/" text="Accueil" />
      <NavLink url="/about" text="À propos" />
      <NavLink url="/contact" text="Contact" />
    </nav>
  </div>
</template>
```

---

</div>
