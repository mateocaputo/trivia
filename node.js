jugar();
var indicie_respuesta_correcta;
function jugar(){

var indice_aleatorio = Math.floor(Math.random()*preguntas.length);

var respuestas_posibles = respuestas[indice_aleatorio];

var posiciones = [0,1,2,3];
var respuestas_reordenadas = [];

var ya_se_metio =false;

for(i in respuestas_posibles){
    var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
    if(posicion_aleatoria==0 && ya_se_metio == false){
	    indicie_respuesta_correcta =i;
		ya_se_metio= true;
}
respuestas_reordenadas[i] = respuestas_posibles[posiciones[
   posicion_aleatoria]];
posiciones.splice(posicion_aleatoria, 1);
}

var txt_respuestas="";
for(i in respuestas_reordenadas){
    txt_respuestas += '<input type="radio" name"pp" value="'+i+'"><label>'+respuestas_reordenadas[i]+'</label>';
}
document.getElementById("respuestas").innerHTML = txt_respuestas;
document.getElementById("pregunta").innerHTML = preguntas[indice_aleatorio];
}
function comprobar (){
var respuesta= i;
if(respuesta==indicie_respuesta_correcta)
{alert("correcta");
}else if(respuesta!=indicie_respuesta_correcta)
{
alert("mal");
}
jugar();
}
</script>
