sortie = document.querySelector("#sortie");
myname = document.querySelector("#name");
prenom= document.querySelector("#prenom");
console.log(name);
btn= document.querySelector("#newName");
var efface = document.querySelector("#efface");

btn.onclick = function(event){
	event.preventDefault();
	if(myname.value != '') {
		//alert(myname.value);
		personne = {
			"nom" : myname.value,
			"prenom" : prenom.value
		};
		localStorage.personne = JSON.stringify(personne);
		Affiche();
	}
	else{alert('Tapez votre nom')}
}

efface.onclick = function(e){
	e.preventDefault();
	Efface();
	Affiche();
}


function Affiche() {
	if("personne" in localStorage) {
		personne = JSON.parse(localStorage.personne);
		sortie.innerHTML = "Bonjour "+personne.nom + " " + personne.prenom;
		// sortie.innerHTML += " "+localStorage.getItem("prenom");
		// for(property in localStorage){
		// 	alert(localStorage[property]);
		// }
	}
	else {sortie.innerHTML = "Bonjour";}
}

function Efface(){
	localStorage.removeItem("personne")
}

Affiche();

//==============TO DO LIST==============



out = document.querySelector("#out");
mytodo = document.querySelector("#newtodo");
btnSub = document.querySelector("#newsub");
var erase = document.querySelector("#erase");

if("list" in localStorage) { // D'abbord, si j ai quelque chose dans mon local storage.
		toDoArray = JSON.parse(localStorage.list); // Je le parse et l'affiche
	}
	else { var toDoArray = new Array();}// Sinon je crée un array vide.

	//alert(typeof(toDoArray));

btnSub.onclick = function(event){// Quand je click, (si je veux ajouter une tâche).
	event.preventDefault();
	if(mytodo.value != '') {//Si la valeur dans ma todo est != à rien
		//alert(myname.value);
		todoNew = {// je crée un nouvel objet.
			"task" : mytodo.value
		};
		toDoArray.push(todoNew); //Je pousse l'objet dans mon Array.
		localStorage.list = JSON.stringify(toDoArray); //Je stringify.
		AfficheTodo(); //Et j'affiche.
	}
	else {alert('Tapez votre object')}//Sinon j'indique qu'il n y a pas d'objet.
}

erase.onclick = function(e){
	e.preventDefault();
	localStorage.removeItem("list");//Je nettoye le local storage.
	toDoArray = new Array();//Je nettoye mon array
	AfficheTodo();//Je réaffiche.
}

var toDo = mytodo;

function AfficheTodo(){ //Après, j'affiche...

	if(toDoArray.length > 0) { // Si il y a une tâche dans mon array.
		//alert('test');
	texte = '<ul>'; //Je crée un ul
	
		for(var i =0; i < toDoArray.length; i++){ // Je fais ma boucle.
			texte += "<li>"+toDoArray[i].task+"</li>"; // J'ajoute à texte dans mon li la new tâche.
		}

		out.innerHTML = texte+"</ul>"; // Je lui indique ou le mettre et ferme le ul.
	 	
		}
	
	else {out.innerHTML = "Il n'y a rien dans votre liste.";}// Sinon j'indique qu'il n'y a pas de tâches.
}

AfficheTodo(); // A l ouverture de la page, j'affiche le contenu du local storage si... voir haut.
