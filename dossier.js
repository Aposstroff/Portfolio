const identifiantDemande = new URLSearchParams(location.search).get("id");
const projet = projets.find(item => identifiant(item) === identifiantDemande);
const courant = document.getElementById("contenu");
if (!projet) {
  courant.className = "wrap missing";
  courant.replaceChildren(element("h1", "", "Projet introuvable"), element("p", "", "La liste des projets te permettra de retrouver un dossier."));
  const retour = element("a", "button", "Voir les projets →");
  retour.href = "./index.html#projets";
  courant.append(retour);
  document.title = "Projet introuvable · Carnet de dev";
} else {
  document.title = projet.titre + " · Carnet de dev";
  document.querySelector('meta[name="description"]').content = projet.resume;
  document.querySelector("#titre").textContent = projet.titre;
  document.querySelector("#resume").textContent = projet.resume;
  document.querySelector("#famille").textContent = "DOSSIER PROJET · " + projet.categorie.toUpperCase();
  document.querySelector("#outils").append(technologies(projet));
  const illustration = document.querySelector("#paysage");
  illustration.src = projet.paysage || projet.image || "./images/pixel.svg";
  illustration.alt = projet.altPaysage || "";
  document.querySelector("#nom-image").textContent = illustration.getAttribute("src").split("/").pop();
  document.querySelector("#legende").textContent = projet.legende || projet.titre;
  const sections = projet.dossier?.length ? [...projet.dossier] : [["Objectif", projet.objectif], ["Réalisation", projet.realisation]];
  sections.push(["Compétences mobilisées", projet.competences]);
  const sommaire = document.querySelector("#sommaire");
  const article = document.querySelector("#lecture");
  for (const [intitule, texte] of sections) {
    if (!intitule || !texte) continue;
    const section = element("section", "chapter");
    const titre = element("h2", "", intitule);
    titre.id = "chapitre-" + (article.children.length + 1);
    section.setAttribute("aria-labelledby", titre.id);
    section.append(titre, element("p", "", texte));
    article.append(section);
    const lien = element("a", "", intitule);
    lien.href = "#" + titre.id;
    sommaire.append(lien);
  }
  if (projet.lien && /^https?:\/\//i.test(projet.lien)) {
    const lien = element("a", "button", projet.libelleLien || "Consulter le projet ↗");
    lien.href = projet.lien;
    article.append(lien);
  }
  const autre = projets[(projets.indexOf(projet) + 1) % projets.length];
  if (autre !== projet) document.querySelector("#suite").append(lienDossier(autre, "text-link", autre.titre + " →"));
}
