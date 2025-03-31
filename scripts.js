// scripts.js

// Fonction pour charger un fichier HTML externe (content.html)
function loadContent(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById('content-container').innerHTML = data;
    })
    .catch(error => console.error('Erreur lors du chargement du contenu:', error));
}

// Charger dynamiquement le contenu HTML
loadContent('content.html');