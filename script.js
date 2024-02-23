let colors = ["#fbc204","#0080ff","#aafbd7","#e2cffd","#ffbf80","#f68a8a","#72e9ff","#77fd0d","#c9ef9a","#8d9702","#4fdd6e","#b83a04" ]
let colorsjugats=[]


/*
Iniciar partida. Es posa 'async' davant per indicar que té
comandes que gestionen el temps d'execució. Pot haver "esperes"
*/
async function iniciarPartida()
{
    colorsjugats.push(colors[Math.trunc(Math.random()*colors.length)])
    for (let i=0;i<colorsjugats.length;i++){
        showNotification(colorsjugats[i])
        //Crida al mètode esperar
        await esperar(1000);
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
    }, 2000);
}
