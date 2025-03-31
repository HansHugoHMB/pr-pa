var encodedPath = "Y29udGVudC5odG1s"; //encodé en Base64

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            document.getElementById('contenu-dynamique').innerHTML = xhr.responseText;
        } else {
            console.error('Erreur lors du chargement du contenu:', xhr.status);
            document.getElementById('contenu-dynamique').innerHTML = 'Erreur lors du chargement.';
        }
    }
};

// Décoder le chemin avant de l'utiliser
xhr.open('GET', atob(encodedPath), true);
xhr.send();