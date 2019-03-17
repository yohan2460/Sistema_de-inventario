

/*jQuery time*/
$(document).ready(function(){
	$("#accordian h3").click(function(){
		//slide up all the link lists
		$("#accordian ul ul").slideUp();
		//slide down the link list below the h3 clicked - only if its closed
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})
})

const $abrirPopup = document.getElementById('btn-abrir-popup');
	  $cerrarPopup = document.getElementById('cerrar');
	  $cancelar = document.getElementById('cancelar');
$abrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
});
$cerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
});
$cancelar.addEventListener('click', function(){
	overlay.classList.remove('active')
})
