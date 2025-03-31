fetch('content.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contenu-dynamique').innerHTML = data;
    })
    .catch(error => {
        console.error('Erreur lors du chargement de content.html:', error);
        document.getElementById('contenu-dynamique').innerHTML = 'Erreur lors du chargement du contenu.';
    });