var coordonnees = document.getElementById('coordonnees'); 
var button = document.querySelectorAll('button');

//pour chaque boutons, afficher l'element correspondant.
button.forEach(function (element) {
    element.addEventListener('click', function (){
        console.log(this.id);
        if (this.id == 'mail'){
            coordonnees.innerText="toto@laposte.net";
        }
        else{
            coordonnees.innerText="0680068057";
        }
    })
    
});

