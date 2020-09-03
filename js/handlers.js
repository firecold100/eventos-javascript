'use strict';

function onblurHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onblur en "+this.id+"</h1>";	
	}
	
}

function onchangeHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onchange en "+this.id+"</h1>";	
	}
	
}

function onclickHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onclick en "+this.id+"</h1>";	
	}
	
}

function ondblclickHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento ondblclick en "+this.id+"</h1>";	
	}
	
}

function onfocusHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onfocus en "+this.id+"</h1>";	
	}
	
}

function onkeydownHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onkeydown en "+this.id+"</h1>";	
	}
	
}

function onkeypressHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onkeypress en "+this.id+"</h1>";	
	}
	
}

function onkeyupHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onkeyup en "+this.id+"</h1>";	
	}
	
}

function onloadHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onloadHandler en "+this.id+"</h1>";	
	}
	
}

function onmousedownHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onmousedown en "+this.id+"</h1>";	
	}
	
}

function onmousemoveHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onmousemove en "+this.id+"</h1>";	
	}
	
}

function onmouseoutHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onmouseout en "+this.id+"</h1>";	
	}
	
}

function onmouseoverHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onmouseover en "+this.id+"</h1>";	
	}
	
}

function onmouseupHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onmouseup en "+this.id+"</h1>";	
	}
	
}

function onresetHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onreset en "+this.id+"</h1>";	
	}
	
}

function onresizeHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onresize en "+this.id+"</h1>";	
	}
	
}

function onselectHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onselect en "+this.id+"</h1>";	
	}
	
}

function onsubmitHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onsubmit en "+this.id+"</h1>";	
	}
	
}

function onunloadHandler(){
	var ae = $('.accion_ejecutada');
	for(var i = ae.length-1; i >= 0; i--){
		ae[i].innerHTML= "<h1>Evento onunload en "+this.id+"</h1>";	
	}
	
	alert('Saliendo de la página');
}