$(document).ready(function(){

});

function calcular(){

    if (event.key === "Enter") {

    		var dia = $("#dia_input").val();
    		dia = parseInt(dia);
            var mes = $("#mes_input").val();
            mes = parseInt(mes);
            var año = $("#año_input").val();
            año = parseInt(año);

            if ( (!isNaN(dia) && dia < 32 && dia > 0) && (!isNaN(mes) && mes < 13 && mes > 0) && (!isNaN(año) && año >= 0 )) {
	            $.ajax({
	                url: 'https://servidor-php.glitch.me/calcular.php',
	                type: 'POST',
	                data:{ dia:dia , mes:mes , año:año },
	                dataType: 'html',
	                success:function(data){

	                    //$("#resultado").html("respuesta del servidor: " + data);
	                    var datos_recibidos = JSON.parse(data);
                    	$("#año_recibidos").html( datos_recibidos ["años"]);
                    	$("#mes_recibidos").html(datos_recibidos["meses"]); 
                    	$("#dia_recibidos").html(datos_recibidos["dias"]); 


	                },

	                  error: function (error) {
	                    console.log('Error en la solicitud AJAX:', error);
	                }

	            });
            }

  
    }
}

var IntervaloDeTiempo = setInterval(mandarMensaje, 180000);


function mandarMensaje() {
	    	    var dia1 = 1;
	    	    dia1 = parseInt(dia1);
	            var mes1 = 1;
	            mes1 = parseInt(mes1);
	            var año1 = 1;
	            año1 = parseInt(año1);
	            $.ajax({
	                url: 'https://servidor-php.glitch.me/calcular.php',
	                type: 'POST',
	                data:{ dia:dia1 , mes:mes1 , año:año1 },
	                dataType: 'html',
	                success:function(data){
	                    var datos_recibidos = JSON.parse(data);
			    console.log('Servidor activo');

	                },

	                  error: function (error) {
	                    console.log('Error en la solicitud AJAX:', error);
	                }

	            });
}


