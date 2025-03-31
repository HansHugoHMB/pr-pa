var xhr = new XMLHttpRequest();  
xhr.onreadystatechange = function() {  
    if (xhr.readyState === 4) {  
        if (xhr.status === 200) {  
            document.getElementById('contenu-dynamique').innerHTML = xhr.responseText;  
        } else {  
            console.error('Erreur lors du chargement de content.html:', xhr.status);  
            document.getElementById('contenu-dynamique').innerHTML = 'Erreur lors du chargement du contenu.';  
        }  
    }  
};  
xhr.open('GET', 'content.html', true);  
xhr.send(); 