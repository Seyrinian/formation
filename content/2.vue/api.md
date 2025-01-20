---
title: Consommer des API
icon: mdi-api
link: api
---

<div id='api'></div>

## Consommer des API

Depuis le début nous travaillons pour créer une interface WEB. Le framework Vue et le travail que nous réalisons fait partie du domaine du Frontend. C'est à dire le code produit pour interagir directement avec l'utilisateur.

Un autre aspect connu du web est le Backend. A l'opposé il correspond à tout ce qui se passe du côté des serveurs de notre applications et qui est mis à disposition du Frontend pour qu'il le propose au client. Ainsi le client n'a jamais accès directement au backend. On peut par exemple citer l'accès aux bases de données, les vérifications d'authentifications, l'appel à des services externes, ...

L'une des choses les plus utiles pour un développeur web et qui est courrament utilisé est l'appel à une API. S'il fallait résumer, une API est une autre application qui tourne et qui propose d'accéder à des services (de manière gratuite ou payante, avec ou sans accès, ...). L'accès à ces services se fait de manière très simple pour l'utilisateur de l'API, il n'a généralement qu'une requête html à appeler, toute le reste, l'appel à la base, les vérifications sont faites par le développeur de l'API.

> Prenons un exemple concret, Bonduelle vend ses produits dans de nombreux supermarchés. Carrefour et Auchan ont chaucn une application web et désirent vendre des produits Bonduelle. Ils vont s'associer avec eux et à un certain moment chacun aura besoin de récupérer des informations produits, stocks, (...) de Bonduelle. Mais il y a un problème, Carrefour et Auchan ne travaille pas avec les mêmes technologies, languages, base de données. Il y a donc deux choix soit Bonduelle développe systématiquement un format de donnée cohérent pour UN client précis à chaque fois qu'ils veulent faire un partenariat. Soits ils proposent un format de données unique quelque soit son client et facilement accessible (par exemple du JSON). Il l'envoie et ce sera ce client qui recevra la donnée et la transformera comme il le veut pour l'adapter à son besoin. Et bien une API c'est un peu ça.

_Dans ce cours nous traitons de frontend donc nous n'allons pas développer ici plus en détails les API, ainsi que les différences entre elles comme le REST ou le SOAP. Vous trouverez plus d'informations sur le backend et les api dans la partie [Node JS](/node#api)_

### Axios, un moyen rapide de consommer

Maintenant que nous savons ce qu'est une API tâchons d'en utiliser une. Une API étant une application web elle possède sa propre adresse. La plupart des API requiert des token d'authentications, des abonnements payants ou des partenariats mais il en existe quelques unes libre d'accès afin de les découvrir.

Tout d'abord nous allons installer le package pour qu'il soit accessible à notre application Vue CLI.

```text
npm install axios
```

Une fois cela fait axios sera utilisable dans nos composant. Il faut pour cela:

- l'importer dans la partie `<script>`
- appeler la méthode que l'on cherche à utiliser (get, post, delete, ...). Généralement nous utiliserons le **get()** qui sert à obtenir de la data. Par exemple, ci-dessous, nous cherchons à récupérer une liste d'activités à la création du composant.

```vue
<script>
import axios from 'axios'
export default {
  mounted() {
    axios
      .get('https://www.boredapi.com/api/activity')
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
```

La response est généralement un objet complexe. A vous de trier les données qui vous interesse dans celle-ci. Par exemple la response ci dessus renvoie un objet JSON avec ces données:

```json
{
  "activity": "Play a video game",
  "type": "recreational",
  "participants": 1,
  "price": 0,
  "link": "",
  "key": "5534113",
  "accessibility": 0
}
```

La valeur renvoyé par la méthode **get** est une Promesse. C'est à dire que c'est une fonction qui à une réussite ou un succès (un peu comme un try/catch). Le _then()_ et le _catch()_ prennent en paramètre une fonction anonyme.

- La fonction anonyme du _then()_ affiche la réponse de la requête Get.
- La fonction anonyme du _catch()_ affiche l'erreur s'il y en a eu une.

_Ne vous inquietez pas si vous ne comprenez pas totalement le principe de Promesses. Tout ce que vous devez retenir c'est qu'elles sont résolues avec un then et un catch. Elles sont développées plus en détails dans la partie [NodeJS](/node#promesses) de ce site._

---

</div>
