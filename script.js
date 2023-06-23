numero = document.getElementById('number');
add = document.getElementById('add');
remove = document.getElementById('remove')
reset = document.getElementById('reset')


add.addEventListener('click', () => {
    numero.innerHTML = parseInt(numero.innerHTML)+1;

    console.log(numero);
})

remove.addEventListener('click', () => {
    numero.innerHTML = parseInt(numero.innerHTML)-1;

    console.log(numero);
})

reset.addEventListener('click', () => {
    numero.innerHTML = "0";

    console.log(numero);
})