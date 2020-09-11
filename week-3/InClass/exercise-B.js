const names = ["jose", "mari", "pedro", "zaquiel"];
const names2 = ["melina", "joana", "angelo"];
var concatenado12 = names.concat(names2);
var ordenado = concatenado12.sort();
console.log(ordenado);

function nombres(a){

    if(ordenado.includes(a)){

        console.log(a + "El alumno esta en la calase");
    } 
    else {
        console.log(a + "el estudiante no esta");
    }
}
nombres("melina");
