const projets = window.projets;

function element(balise, classe, texte) {
  const noeud = document.createElement(balise);
  if (classe) noeud.className = classe;
  if (texte) noeud.textContent = texte;
  return noeud;
}

function technologies(projet) {
  const groupe = element("div", "tags");
  for (const nom of projet.technologies || []) groupe.append(element("span", "tag", nom));
  return groupe;
}

function identifiant(projet) {
  return projet.id || String(projets.indexOf(projet) + 1);
}

function lienDossier(projet, classe, texte) {
  const lien = element("a", classe, texte);
  lien.href = "./projet.html?id=" + encodeURIComponent(identifiant(projet));
  return lien;
}
