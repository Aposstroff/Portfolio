// Duplique une fiche pour ajouter un projet. La catégorie crée son propre filtre.
// image et lien sont facultatifs. Les images sont relatives à index.html.
window.projets = [
  {
    id: "korok-swap",
    titre: "Korok-Swap",
    categorie: "Web",
    image: "./images/korok.png",
    paysage: "./images/clairiere.png",
    legende: "La clairière des créations",
    altPaysage: "Une porte de pierre couverte de mousse au bout d’un sentier en pixel art.",
    dossier: [
      ["Partager une construction", "Une construction de joueur peut se partager sous la forme d’un QR code Autobuild. Korok-Swap associe à cette image un titre, un pseudonyme et une description facultative. La galerie donne ainsi un peu de contexte à chaque création avant qu’un autre joueur l’essaie."],
      ["Du fichier à la carte", "Dès la sélection du fichier, React affiche un aperçu local de l’image. Le titre et le pseudonyme alimentent également la carte de prévisualisation. Pendant l’envoi, le bouton de publication se désactive pour éviter une deuxième soumission. En cas d’échec, le formulaire conserve la saisie."],
      ["Le passage par l’API", "Le navigateur envoie le formulaire en multipart à POST /api/creations. Express reçoit le fichier avec Multer, l’enregistre sous un nom unique et conserve son chemin avec les champs texte dans MySQL. La route GET /api/creations renvoie ces informations à la galerie."],
      ["Un choix de conception", "Le composant de formulaire confie l’envoi à une fonction dédiée. Cela permet de faire évoluer l’aperçu sans toucher à la requête réseau. Côté galerie, le chargement, la liste vide et l’échec de lecture ont chacun leur propre affichage."]
    ],
    resume: "Une galerie pour publier et découvrir des créations de joueurs.",
    technologies: ["React", "Express", "MySQL"],
    objectif: "Permettre à un joueur de partager une création avec un titre, un pseudonyme, une description et une image.",
    realisation: "Le formulaire React envoie les données et l’image à une API Express. Multer prend en charge le fichier, puis MySQL conserve la fiche et le chemin de l’image. La galerie récupère les créations depuis l’API.",
    competences: "Relier un formulaire à une API, traiter un fichier envoyé et afficher les enregistrements d’une base relationnelle."
  },
  {
    id: "truffle-app",
    titre: "Truffle App",
    categorie: "Web",
    image: "./images/truffle.png",
    paysage: "./images/bureau-truffle.png",
    legende: "Le bureau des marchés",
    altPaysage: "Un bureau pastel, une lampe articulée et un écran affichant un graphique en pixel art.",
    dossier: [
      ["Explorer l’application", "Le parcours de démonstration permet de chercher un actif, de l’ajouter aux favoris puis de le retrouver en changeant de vue. Un portefeuille et un historique complètent la navigation. Les prix et les montants affichés servent à explorer l’interface avec des données fictives."],
      ["Passer de HTML à React", "La migration a réuni dix vues dans une application React compilée avec Vite. Le routage relie les écrans de compte, l’accueil, les marchés, les favoris, le portefeuille, l’historique et les réglages. FastAPI expose les routes utilisées par les formulaires."],
      ["Où conserver l’état ?", "Les favoris restent dans le navigateur. Ce choix permet de retrouver une sélection après rechargement sur le même navigateur. Synchroniser cette liste entre deux appareils demanderait de la rattacher à un compte côté serveur."],
      ["Ce qui a été vérifié", "Le bilan du 22 novembre 2026 consigne une compilation réussie, treize tests React et cinq tests Python réussis. Les parcours de compte ont été testés avec une API simulée. La réception réelle des e-mails, le parcours complet avec MongoDB et l’ouverture dans la fenêtre de bureau restent à valider."]
    ],
    resume: "Une application de démonstration pour explorer des actifs et suivre ses favoris.",
    technologies: ["React", "FastAPI", "Python"],
    objectif: "Réunir la consultation des marchés, la recherche d’actifs et un portefeuille de démonstration dans une même interface.",
    realisation: "L’interface React organise la navigation entre les vues. Les favoris sont conservés dans le navigateur et les formulaires communiquent avec FastAPI. Les cours et les montants affichés sont fictifs.",
    competences: "Découper une interface en vues, intégrer des routes API et tester les parcours côté client et côté serveur."
  },
  {
    id: "truffle-ia",
    titre: "Truffle IA",
    categorie: "IA",
    image: "./images/truffle-ia.png",
    paysage: "./images/atelier-ia.png",
    legende: "L’atelier des modèles",
    altPaysage: "Un réseau de neurones dessiné sur un moniteur à côté d’un petit serveur en pixel art.",
    dossier: [
      ["Transformer une série de prix", "La chaîne de préparation part des prix d’ouverture, de clôture, du plus haut, du plus bas et du volume. Elle en dérive des variables numériques et associe aux observations l’une de trois classes, SELL, HOLD ou BUY. Le but est d’étudier si ces variables permettent de distinguer les trois situations."],
      ["Organiser les spécialistes", "Huit groupes de modèles spécialisés partagent une chaîne d’entraînement. La normalisation est ajustée sur les données d’apprentissage, puis réutilisée pour transformer les autres observations. Le modèle et son outil de normalisation sont enregistrés ensemble pour pouvoir reproduire le traitement."],
      ["Un essai de bout en bout", "Lors du contrôle du 22 novembre 2026, un modèle a effectué un passage sur des données synthétiques, sur CPU. Le modèle et son outil de normalisation ont ensuite été rechargés et les probabilités produites ont été vérifiées. Cet essai valide les étapes logicielles du parcours."],
      ["Ce que les données permettent de conclure", "Le jeu BTC examiné contient 1 321 observations journalières, dont seulement quatre classées HOLD. Cette rareté rend l’évaluation de cette classe fragile. Les prochaines étapes consistent à revoir le découpage chronologique, à réserver une période de test indépendante et à évaluer les spécialistes avant d’envisager leur intégration à Truffle App."]
    ],
    resume: "Un projet expérimental pour préparer des données et entraîner des modèles spécialisés.",
    technologies: ["Python", "Machine learning"],
    objectif: "Étudier comment plusieurs modèles spécialisés peuvent analyser différentes caractéristiques d’une série de marché.",
    realisation: "Une chaîne commune prépare les données et organise l’entraînement. Un essai sur données synthétiques a permis de vérifier l’entraînement, la sauvegarde et le rechargement d’un modèle. La performance prédictive reste à évaluer.",
    competences: "Préparer des données, distinguer un test de fonctionnement d’une évaluation prédictive et documenter les limites d’un modèle."
  }
];
