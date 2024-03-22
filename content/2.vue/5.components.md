---
title: Les composants
icon: mdi-puzzle
link: components
---

<div id='components'></div>

## Les Composants

Lors de la création d'un site web, nous sommes très souvent amenés à répéter notre code et cela rend souvent la maintenance un peu difficile. Par exemple, la plupart des sites web ont un menu de navigation sur chaque page.

```html
<html>
  <body>
    <nav>
      <a href="/">Accueil</a>
      <a href="/about">À propos</a>
      <a href="/contact">Contact</a>
    </nav>
    <p>Bienvenue sur notre page d'<a href="/">Accueil</a></p>
  </body>
</html>
```

Bien que cela soit assez simple à gérer sur une seule page, imaginez ce qui se passerait si quelqu'un devait modifier les liens de navigation. Si vous deviez mettre à jour la classe CSS pour actualiser les styles, cela nécessiterait au moins trois lignes de modifications de code pour chaque page qui utilise cette navigation. Par conséquent, cela crée de nombreuses possibilités de bugs.

Pour résoudre ce problème, le concept de composants a été popularisé. Ils permettent d'encapsuler des structures HTML, CSS et des comportements javascript de façon réutilisable et facilement maintenable.

### Les composants monofichiers

Dans la documentation de Vue vous pourrez trouver plusieurs manières différentes de définir un composant. La manière la plus courante et la plus facile à appréhender est la méthode par composant monofichier. Il s'agit d'utiliser un type de fichier particulier (.vue) qui contiendra l'entiereté des logiques de notre composant. Ces logiques se décomposent en 3 blocs primaires:

- Template: où le HTML du composant sera indiqué
- Script: le comportement Javascript associé à notre composant
- Style: Le CSS associé à bnotre composant

Voici un exemple de composant:

```javascript
// ./components/NavLink.vue
<template>
  <a href="/">Accueil</a>
  <a href="/about">À propos</a>
  <a href="/contact">Contact</a>
</template>

<script>
export default {
  name: 'NavLink',
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
```

### Utiliser un composant

Le nom du fichier sera le même que le **name** que l'on donne au composant dans son bloc script.

Dans l'exemple précedent on apelle notre composant NavLink, le fichier sera donc NavLink.vue et on pourra l'appeler dans d'autre fichier grâce à la balise `<NavLink></NavLink>`. Il ne faut pas oublier dans la partie `<script>` du fichier qui l'utilise d'importer le composant depuis son fichier d'origine. Et on précise son name dans l'attribut components.

Voici un exemple d'appel de notre composant NavLink dans le fichier App.vue

```javascript
<template>
	<div id="app">
		<nav>
			<NavLink></NavLink>
		</nav>
	</div>
</template>

<script>
import NavLink from './compoents/NavLink.vue'

export default {
	name: 'App',
	components: {
		NavLink
	}
}
</script>

```

Avec ce refactoring, notre application est plus facile à maintenir puisqu'il n'y a qu'un seul fichier qui contient toutes les configurations dont nous avons besoin. Elles seront ensuite appliquées dans toute notre application. En d'autres termes, une fois que nous aurons apporté une modification à ce fichier, elle sera appliquée de manière uniforme dans le reste de l'application.

---

</div>
