var NumberOfStudents = 15;

var NumberOfMentors = 8;

var Resultado = NumberOfMentors + NumberOfStudents;

var porcentajeS = Math.round((100 * (NumberOfStudents)) / Resultado);
var porcentajeM = Math.round((100 * (NumberOfMentors)) / Resultado);


console.log(porcentajeS + "%");
console.log(porcentajeM + "%");

