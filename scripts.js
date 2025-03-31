
fetch('content.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors du chargement de content.html: ' + response.status);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('contenu-dynamique').innerHTML = data;
    })
    .catch(error => {
        console.error(error);
        document.getElementById('contenu-dynamique').innerHTML = 'Erreur lors du chargement du contenu.';
    });