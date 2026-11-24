const liste = document.querySelector("#liste");
const filtres = document.querySelector(".filters");
const fiche = document.querySelector("#fiche");
const contenu = document.querySelector("#fiche-contenu");

function ouvrirFiche(projet) {
  const titre = element("h2", "", projet.titre);
  titre.id = "fiche-titre";
  contenu.replaceChildren(titre, technologies(projet));
  for (const [rubrique, texte] of [["Objectif", projet.objectif], ["Réalisation", projet.realisation], ["Compétences mobilisées", projet.competences]]) {
    if (texte) contenu.append(element("h3", "", rubrique), element("p", "", texte));
  }
  if (projet.lien && /^https?:\/\//i.test(projet.lien)) {
    const lien = element("a", "button", projet.libelleLien || "Consulter le projet ↗");
    lien.href = projet.lien;
    contenu.append(lien);
  }
  contenu.append(lienDossier(projet, "button", "Lire le dossier complet →"));
  fiche.showModal();
}

function creerCarte(projet) {
  const carte = element("article", "card");
  const visuel = element("div", "card-image");
  const image = element("img", "card-art");
  image.src = projet.image || "./images/pixel.svg";
  image.alt = "";
  image.width = 224;
  image.height = 104;
  if (!projet.image) image.style.objectFit = "contain";
  visuel.append(image, element("span", "card-category", projet.categorie));
  const corps = element("div", "card-body");
  const titre = element("h3", "card-title");
  const lien = lienDossier(projet, "card-open", projet.titre);
  const fleche = element("span", "card-arrow", "↗");
  fleche.setAttribute("aria-hidden", "true");
  titre.append(lien, fleche);
  const rapide = element("button", "quick-view", "Fiche express");
  rapide.type = "button";
  rapide.setAttribute("aria-label", "Fiche express de " + projet.titre);
  rapide.setAttribute("aria-haspopup", "dialog");
  rapide.addEventListener("click", () => ouvrirFiche(projet));
  const pied = element("div", "card-foot");
  pied.append(technologies(projet), rapide);
  corps.append(titre, element("p", "", projet.resume), pied);
  carte.append(visuel, corps);
  return carte;
}

function afficher(categorie) {
  const selection = categorie === null ? projets : projets.filter(projet => projet.categorie === categorie);
  liste.replaceChildren(...selection.map(creerCarte));
  document.querySelector("#annonce").textContent = selection.length + (selection.length > 1 ? " projets affichés" : " projet affiché");
}

for (const categorie of [null, ...new Set(projets.map(projet => projet.categorie))]) {
  const bouton = element("button", "", categorie || "Tous");
  bouton.type = "button";
  bouton.setAttribute("aria-pressed", String(categorie === null));
  bouton.addEventListener("click", () => {
    for (const autre of filtres.children) autre.setAttribute("aria-pressed", String(autre === bouton));
    afficher(categorie);
  });
  filtres.append(bouton);
}
afficher(null);
document.querySelector("#fermer").addEventListener("click", () => fiche.close());
fiche.addEventListener("click", event => {
  if (event.target !== fiche) return;
  const cadre = fiche.getBoundingClientRect();
  if (event.clientX < cadre.left || event.clientX > cadre.right || event.clientY < cadre.top || event.clientY > cadre.bottom) fiche.close();
});

const navigation = Array.from(document.querySelectorAll('nav a[href^="#"]'));
function suivreNavigation() {
  const enBas = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  let active = navigation[0];
  for (const lien of navigation.slice(1)) {
    if (enBas || document.querySelector(lien.hash).getBoundingClientRect().top <= window.innerHeight * .32) active = lien;
  }
  for (const lien of navigation) {
    if (lien === active) lien.setAttribute("aria-current", "location");
    else lien.removeAttribute("aria-current");
  }
}
window.addEventListener("scroll", suivreNavigation, { passive: true });
window.addEventListener("resize", suivreNavigation);
suivreNavigation();
