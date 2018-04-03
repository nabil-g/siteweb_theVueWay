//Utilisation de JS pur (et un peu de jQuery)

// Déclaration d'une fonction d'envoi en utilisant ajax
function envoi(cible) {
	$.ajax({
		method: 'POST', // On indique le type de requete http
		url: 'php/contact.php', // l'adresse de la page de réception
		data: $(cible).serialize(), // on sérialise toutes les données entrées dans le formulaire pour les envoyer
		success: function(data) { // en cas de succés
			$('#six form').hide();
			$('#reponseMsg').text(data); // on remplace le formulaire par les données reçues
			$('#reponseMsg').fadeIn();
			$("#rubrique").animate({height:"250px"});
		},
		error: function(){ // en cas d'erreur

		alert('La requête n\'a pas aboutie !');
		}
	});
}


//Création d'une fonction qui permettra de colorier les champs du formulaire non ou mal remplis
	//si erreur vaut true,on colorise l'arrière-plan du champ concerné entré en parametre en rouge
function surligne(champ, erreur) {
	if (erreur)
		champ.style.backgroundColor = "rgba(255,8,8,0.25)";

	else
		champ.style.backgroundColor = "";
}

//Création d'une fonction qui permet de vérifier la longueur du nom de l'utilisateur
	// Si la longueur de la donnée du champ nom est inférieur à 2 caractères ou supérieur à 50
function verifNom(champ){
	if (champ.value.length <2 || champ.value.length > 50)
	{
		surligne(champ,true); //j'exécute alors la fonction qui s'appliquera au champ concerné et retournera faux.
		return false;
	}
	else
	{
		surligne(champ,false);
		return true;
	}
}

//Création d'une fonction qui permet de vérifier que l'adresse e-mail satisfait bien le REGEX de vérification e-mail
function verifMail(champ) {
	//Création du regex e-mail
	var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	if(!regex.test(champ.value)) //Avec la fonction test appliqué au regex sur la valeur du champ (en parametre), je vérifie que la valeur du champ respecte le regex. Dans ce cas précis, je vérifie s'il ne le respecte pas avec "!" (différent de).
	{
		surligne(champ, true);
		return false;
	}
	else
	{
		surligne(champ, false);
		return true;
	}
}

//Création d'une fonction qui permet de vérifier que le texte du message soit compris entre 2 et 1500 caractères.
function verifMsg(champ){
	if (champ.value.length <2 || champ.value.length >1500)
	{
		surligne(champ,true); 	// Si la longueur de la donnée du champ nom est inférieur à 2 caractères ou supérieur à 1500
		return false;
	}
	else
	{
		surligne(champ,false);
		return true;
	}
}

//Création d'une grande fonction qui vérifie que toutes les autres fonctions de vérification renvoient bien true, afin de valider le formulaire.
function verifForm(f) //le paramètre f, sera remplacé à l'exécution par le mot-clé this, qui permettra de séléctionner le bon champ du formulaire et l'appliquer à la bonne formule.
{
	var nomOk = verifNom(f.name); // On exécute chaque fonction de vérif et on enregistre le résultat (true ou false) dans des variables.
	var mailOk = verifMail(f.mailaddress);
	var msgOk = verifMsg(f.message);

	//On vérifie ensuite que toutes ces fonctions ont renvoyé true
	if(nomOk && mailOk && msgOk){
		event.preventDefault(); // On empeche la transmission classique du formulaire
		envoi(f); // on exécute la fonction d'envoi créée tout en haut
		return true;
    $('#erreurForm').fadeOut();
    $('#okForm').show();
	}
	else{
    $('#erreurForm').fadeIn();
    $('#okForm').hide();
		return false;
	}
}
