let colorstotals = ["#fbc204","#0080ff","#aafbd7","#e2cffd","#ffbf80","#f68a8a","#80acffff","#72e9ff","#bd10ccef","#77fd0d","#fa1373e5","#c9ef9a","#2902d1d3","#8d9702","#4fdd6e","#b83a04" ]
let colorsjugats=[]
let posicio=0
/*
Iniciar partida. Es posa 'async' davant per indicar que té
comandes que gestionen el temps d'execució. Pot haver "esperes"
*/
async function iniciarPartida() {
    colorsjugats.push(colorstotals[Math.trunc(Math.random()*colorstotals.length)])
    posicio = 0
    for (let i=0;i<colorsjugats.length;i++){
        showNotification(colorsjugats[i])
        //Crida al mètode esperar
        await esperar(1001);
    }
}
function esperar(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */

function showNotification(message) {
    console.log(message)
    var notification = document.getElementById('notification');
    notification.style.backgroundColor=message
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, 1000);
}
//mira si el color que pitges per veure si està a la posició correcte//
function pitjarbotocorrecte(colors){
    console.log(colorsjugats[0]+ "  - " + colorstotals[colors] + " - " + colors)
    if(colorsjugats[posicio]== colorstotals[colors]){
        posicio= posicio+1
        if(colorsjugats.length == posicio){
            iniciarPartida();
        }
        //si el color és incorrecte t'avisa//
    }else{
    window.alert("color incorrecte")
    }
}