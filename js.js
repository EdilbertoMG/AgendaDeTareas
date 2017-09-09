(function(){

	//variables

	var lista = document.getElementById("lista"),
	tareaInput = document.getElementById("tareaInput"),
	btnNuevaTarea = document.getElementById("btn-agregar");

	//funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

			if (tarea === "") {
				tareaInput.setAttribute("placeholder","Agregar una Tarea valida");
				tareaInput.className="error"
				return false;
			}
			// agregamos el contenido al enlace
			enlace.appendChild(contenido);
			//le establecemos un atributo a href
			enlace.setAttribute("href","##");
			// agregamos en enlace (a) a la nueva tarea (li)
			nuevaTarea.appendChild(enlace);
			//agregamos la nueva tarea a la lista
			lista.appendChild(nuevaTarea);
			//depues que se ejecute todo borrar lo que ya se deja escrito
			tareaInput.value="";

			//para que agregue el elemento para poder eliminar
			for (var i = 0; i <= lista.children.length - 1; i++) {
		    lista.children[i].addEventListener("click",function(){
			this.parentNode.removeChild(this);
		});

	}

	};
	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};
	var eliminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	//eventos
	//agregar tarea
	btnNuevaTarea.addEventListener("click",agregarTarea);

	//comprobar Input
	tareaInput.addEventListener("click",comprobarInput);

	//borrar elementos de la lista
	for (var i = 0; i <= lista.children.length - 1; i++) {
		lista.children[i].addEventListener("click",eliminarTarea)
	}

}());