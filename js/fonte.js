  // Objeto para armazenar tamanhos de fonte originais de cada elemento pelo seu ID
  var tamanhosFontesOriginais = {};

  // Salva os tamanhos originais das fontes ao carregar a página
  window.onload = function() {
	  var elementos = document.querySelectorAll('*');
	  elementos.forEach(function(elemento, index) {
		  var tamanhoFonteAtual = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
		  var uniqueID = 'elemento-' + index;
		  elemento.setAttribute('data-unique-id', uniqueID);
		  tamanhosFontesOriginais[uniqueID] = tamanhoFonteAtual;
	  });
  };

  function aumentarFonte() {
	  var elementos = document.querySelectorAll('*');
	  elementos.forEach(function(elemento) {
		  var tamanhoFonteAtual = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
		  var tamanhoFonteAtualNum = parseFloat(tamanhoFonteAtual);
		  elemento.style.fontSize = (tamanhoFonteAtualNum + 2) + 'px';
	  });
  }

  function diminuirFonte() {
	  var elementos = document.querySelectorAll('*');
	  elementos.forEach(function(elemento) {
		  var tamanhoFonteAtual = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
		  var tamanhoFonteAtualNum = parseFloat(tamanhoFonteAtual);
		  if (tamanhoFonteAtualNum > 10) {
			  elemento.style.fontSize = (tamanhoFonteAtualNum - 2) + 'px';
		  }
	  });
  }

  function resetarFonte() {
	  var elementos = document.querySelectorAll('*');
	  elementos.forEach(function(elemento) {
		  var uniqueID = elemento.getAttribute('data-unique-id');
		  if (uniqueID && tamanhosFontesOriginais[uniqueID]) {
			  elemento.style.fontSize = tamanhosFontesOriginais[uniqueID];
		  }
	  });
  }

  document.getElementById('zoom-in').addEventListener('click', aumentarFonte);
  document.getElementById('zoom-out').addEventListener('click', diminuirFonte);
  document.getElementById('reset-font').addEventListener('click', resetarFonte);