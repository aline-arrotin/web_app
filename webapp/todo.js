		alert("ver 0.0.10");		


		liste = document.querySelector("#liste");
		todo = document.querySelector("#todo");
		date = document.querySelector("#date");
		form = document.querySelector("#newTodo");
		linkDelete = document.querySelector("#efface");

		form.onsubmit = function(event) {
			event.preventDefault();
			if(todo.value != '' && date != '') {
			//alert(nom.value);
			todoNew = {
				"todo" : todo.value,
				"date" : date.value
			};
			todosArray.push(todoNew);
			localStorage.todos = JSON.stringify(todosArray);
			Affiche();
			}
			else {alert('Tapez vos données, nom d\'ijeu')}
		}

	linkDelete.onclick = function(e) {
		e.preventDefault();
		localStorage.removeItem("todos");
		todosArray = new Array();
		Affiche();

	}

	function Recup () {
		if("todos" in localStorage) {
		todosArray = JSON.parse(localStorage.todos);
		}
		else {todosArray = new Array();}
		//return todosArray;
	}
	function Affiche() {
			
			texte = '<ul>';
			
			if (todosArray.length > 0) {
				for(i=0; i < todosArray.length; i++) {
					
					texte += '<li data_id="">' + todosArray[i].todo + ' à faire pour le ' + dateAff(todosArray[i].date,'/') +'</li>';
				}
			}
			liste.innerHTML = texte+"</ul>";
		}
	function dateAff(date,separator) {
		date = date.split("-");
		date.reverse();
		date = date.join(separator);
		return date;
	}
	Recup();
	Affiche();

$('.image').click(function(){
	$(this).addClass('hidden');
});
