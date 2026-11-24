# Personnaliser le portfolio

Ouvre `index.html` dans ton navigateur. Dans l’archive, les fichiers du site se trouvent à la racine. Dans le dépôt Sites, ils se trouvent dans `dist/`.

## Ajouter un projet

Dans `projets.js`, duplique une fiche entre les crochets de `window.projets`. Sépare les fiches par une virgule. Leur ordre dans le fichier est leur ordre sur la page.

```js
{
  id: "nom-du-projet",
  titre: "Nom du projet",
  categorie: "Web",
  resume: "Une phrase pour présenter le projet.",
  technologies: ["HTML", "CSS"],
  objectif: "À quel besoin répond le projet ?",
  realisation: "Qu’as-tu développé et comment ?",
  competences: "Qu’as-tu appris ou mis en pratique ?",
  dossier: [
    ["Le contexte", "Décris le besoin de départ."],
    ["Un choix technique", "Explique une décision à partir d’un exemple concret."]
  ]
}
```

Les catégories distinctes deviennent automatiquement des filtres. Pour illustrer la carte, copie ton fichier dans `images/` et ajoute le champ `image` avec le chemin relatif, par exemple `"./images/mon-projet.png"`. Un format horizontal proche de 2,15 pour 1 convient aux cartes. En l’absence d’image, la mascotte du carnet apparaît.

Pour ajouter un bouton dans la fiche, renseigne le champ `lien` avec l’adresse HTTPS du dépôt ou de la démonstration. Le champ facultatif `libelleLien` personnalise son texte.

Choisis un `id` unique et garde-le pour que les liens partagés restent valables. La carte ouvre `projet.html?id=nom-du-projet`. Le tableau `dossier` alimente automatiquement les chapitres et le sommaire. Si tu l’omets, la page reprend les rubriques de la fiche express. Pour l’illustration du dossier, renseigne `paysage`, `altPaysage` et `legende`.

## Modifier ton profil

Édite `a-propos.html` pour remplacer Alex par ton prénom, ton parcours et tes passions. Une fois le portrait personnalisé, adapte la mention « Portrait d’exemple » et la note sur le personnage. La présentation courte de l’accueil se trouve dans la section `id="profil"` de `index.html`. Les couleurs principales se trouvent au début de `style.css`.

## Héberger le site

Dépose tous les fichiers HTML, CSS et JavaScript ainsi que le dossier `images/` de l’archive dans le répertoire servi par ton hébergeur statique. Le portfolio fonctionne aussi dans un sous-dossier. Après une modification, transfère les fichiers concernés et recharge la page.
