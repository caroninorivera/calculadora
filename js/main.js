// Función para realizazr la suma de dos números
var numero1 = prompt("Digite el primer número: ");
var operacion = prompt("Digite la operación: ");
var numero2 = prompt("Digite el segundo número: ");
num1 = parseInt(numero1);
num2 = parseInt(numero2);

switch(operacion)
{
  case "suma" || "sum" :
    var suma = function(num1, num2){
      var resultado = num1 + num2;
      console.log("El resultado de la suma es: " + resultado);
    };
    suma(num1, num2);
  break;
  case "multiplicacion" || "multiplicación" || "mul" :
    var multiplicacion = function(num1, num2){
      var resultado = num1 - num2;
      console.log("El resultado de la multiplicacion es: " + resultado);
    };
    multiplicacion(num1, num2);
  break;
  case "modulo" || "mod" :
    var modulo = function(num1, num2){
      var resultado = num1 % num2;
      console.log("El resultado del modulo es: " + resultado);
    };
    modulo(num1, num2);
  break;
  default:
  console.log("Operador no valido");
}
