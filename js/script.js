'use strict';


function f(){
  onblurAssign();
  onchangeAssign();
  onclickAssign();
  ondblclickAssign();
  onfocusAssign();
  onkeydownAssign();
  onkeypressAssign();
  onkeyupAssign();
  onloadAssign();
  onmousedownAssign();
  onmousemoveAssign();
  onmouseoutAssign();
  onmouseoverAssign();
  onmouseupAssign();
  onresetAssign();
  onresizeAssign();
  onselectAssign();
  onsubmitAssign();
  onunloadAssign();
}

jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}

function onblurAssign(){
  var onblur = $(':regex(id,_onblur)');
  for (var i = onblur.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onblur[i].onblur = onblurHandler;
  }
}

function onchangeAssign(){
  var onchange = $(':regex(id,_onchange)');
  for (var i = onchange.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onchange[i].onchange = onchangeHandler;
  }
}

function onclickAssign(){
  var onclick = $(':regex(id,_onclick)');
  for (var i = onclick.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onclick[i].onclick = onclickHandler;
  }
}

function ondblclickAssign(){
  var ondblclick = $(':regex(id,_ondblclick)');
  for (var i = ondblclick.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    ondblclick[i].ondblclick = ondblclickHandler;
  }
}

function onfocusAssign(){
  var onfocus = $(':regex(id,_onfocus)');
  for (var i = onfocus.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onfocus[i].onfocus = onfocusHandler;
  }
}

function onkeydownAssign(){
  var onkeydown = $(':regex(id,_onkeydown)');
  for (var i = onkeydown.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onkeydown[i].onkeydown = onkeydownHandler;
  }
}

function onkeypressAssign(){
  var onkeypress = $(':regex(id,_onkeypress)');
  for (var i = onkeypress.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onkeypress[i].onkeypress = onkeypressHandler;
  }
}

function onkeyupAssign(){
  var onkeyup = $(':regex(id,_onkeyup)');
  for (var i = onkeyup.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onkeyup[i].onkeyup = onkeyupHandler;
  }
}

function onloadAssign(){
  var onload = $(':regex(id,_onload)');
  for (var i = onload.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onload[i].onload = onloadHandler;
  }
}

function onmousedownAssign(){ //******************************
  var onmousedown = $(':regex(id,_onmousedown)');
  for (var i = onmousedown.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onmousedown[i].onmousedown = onmousedownHandler;
  }
}

function onmousemoveAssign(){
  var onmousemove = $(':regex(id,_onmousemove)');
  for (var i = onmousemove.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onmousemove[i].onmousemove = onmousemove;
  }
}

function onmouseoutAssign(){
  var onmouseout = $(':regex(id,_onmouseout)');
  for (var i = onmouseout.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onmouseout[i].onmouseout = onmouseoutHandler;
  }
}

function onmouseoverAssign(){
  var onmouseover = $(':regex(id,_onmouseover)');
  for (var i = onmouseover.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onmouseover[i].onmouseover = onmouseoverHandler;
  }
}

function onmouseupAssign(){
  var onmouseup = $(':regex(id,_onmouseup)');
  for (var i = onmouseup.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onmouseup[i].onmouseup = onmouseupHandler;
  }
}

function onresetAssign(){
  var onreset = $(':regex(id,_onreset)');
  for (var i = onreset.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onreset[i].onreset = onresetHandler;
  }
}

function onresizeAssign(){
  var onresize = $(':regex(id,_onresize)');
  for (var i = onresize.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onresize[i].onresize = onresizeHandler;
  }
}

function onselectAssign(){
  var onselect = $(':regex(id,_onselect)');
  for (var i = onselect.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onselect[i].onselect = onselectHandler;
  }
}

function onsubmitAssign(){
  var onsubmit = $(':regex(id,_onsubmit)');
  for (var i = onsubmit.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onsubmit[i].onsubmit = onsubmitHandler;
  }
}

function onunloadAssign(){
  var onunload = $(':regex(id,_onunload)');
  for (var i = onunload.length-1; i >=0 ; i--) {
    //onblur[i].addEventListener('blur',onblurHandler); //Otra manera de hacerlo.
    onunload[i].onunload = onunloadHandler;
  }
}

window.onload=f;

/*
function on(eventName, selector, handler) {
  document.addEventListener(eventName, function(event) {
    const elements = document.querySelectorAll(selector);
    const path = event.composedPath();
    path.forEach(function(node) {
      elements.forEach(function(elem) {
        if (node === elem) {
          handler.call(elem, event);
        }
      });
    });
  }, true);
}

function prueba(pointerEvent) {
	console.log('Click en el boton con id:'+ this.id);
	console.log(getMethods(pointerEvent));
	console.log(pointerEvent.isPrimary);
  //console.log('Uno: '+uno);
	console.log('Prueba :v');
}







/*
function getMethods(obj) {
  var result = [];
  for (var id in obj) {
    try {
      if (typeof(obj[id]) == "function") {
        result.push(id + ": " + obj[id].toString());
      }
    } catch (err) {
      result.push(id + ": inaccessible");
    }
  }
  return result;
}
*/

