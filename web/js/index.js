

let contenedorRender = document.getElementById('listaComparaciones');
function addElementoToComendario(valor, clave){
    let actualidad = contenedorRender.innerHTML;
    contenedorRender.innerHTML = actualidad + generateElementTxt(valor, clave);
}


function generateElementTxt(valor, clave){
    let elemento = `
       <div class="toast mx-auto show">
        <div class="toast-header">
          <strong class="me-auto">${valor}</strong>
          <small>${clave}</small>         
        </div>
      </div>
    `;
	
    return elemento;
}



//FizzBuzz ejercicio

let contador = 100;

for(let i = 1; i <= contador; i++) {
    //SI TIENE ES MULTIPLO O DE 3 O DE 5 ENTRA
    // e.g 1%3 = 1, 2%3 = 2, 3%3 = 0,
    // Es decir, si el valor es !(0) = 1
    // Igual se puede poner para que sea mas entendible i%3 == 0

    if(!(i % 3) || !(i % 5)) {
        if( !(i % 3) && !(i % 5)) { // 
            //Si es un número multiplo de 3 y 5, imprime "FizzBuzz"
            console.log("FizzBuzz");
			addElementoToComendario(i, "FizzBuzz");
        } else if( !(i % 3) ) {
            //Si es un multiplo de 3, imprime "Fizz"
            console.log("Fizz");
			addElementoToComendario(i, "Fizz");
        } else {
            //Si es un número multiplo de 5, imprime "Buzz"
            console.log("Buzz");
			addElementoToComendario(i, "Buzz");
        }
    } else {
        //Si no es multiplo de 3 y 5, mostrar el número;
        console.log(i);
		addElementoToComendario(i, "");
    }
}