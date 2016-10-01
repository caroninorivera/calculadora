// Función para realizazr la suma de dos números
var numero1 = prompt("Digite el primer número: ");
var operacion = prompt("Digite la operación: ");
var numero2 = prompt("Digite el segundo número: ");
num1 = parseInt(numero1);
num2 = parseInt(numero2);


 function validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      alert("El valor " + numero + " no es un número");
  }

switch(operacion)
{

  case "suma" :
  case "+":
  case "sum" :
  case "plus" :
    var suma = function(num1, num2){
      var resultado = num1 + num2;
      alert("El resultado de la suma es: " + resultado);
      console.log("El resultado de la suma es: " + resultado);
    };
    suma(num1, num2);
  break;
  case "multiplicacion" :
  case "multiplication" :
  case "*" :
  case "times":

    var multiplicacion = function(num1, num2){
      var resultado = num1 * num2;
        alert("El resultado de la multiplicacion es: " + resultado);
      console.log("El resultado de la multiplicacion es: " + resultado);
    };
    multiplicacion(num1, num2);
  break;
  case "modulo" :
    var modulo = function(num1, num2){
      var resultado = num1 % num2;
      console.log("El resultado del modulo es: " + resultado);
    };
    modulo(num1, num2);
  break;
  case "mod" :
    var modulo = function(num1, num2){
      var resultado = num1 % num2;
      console.log("El resultado del modulo es: " + resultado);
    };
    modulo(num1, num2);
  break;

  case "mod" :
    var modulo = function(num1, num2){
      var resultado = num1 % num2;
      console.log("El resultado del modulo es: " + resultado);
    };
    modulo(num1, num2);
  break;

  case "resta" :
  case "-" :
    var resta = function(num1, num2){
      var resultado = num1 - num2;
        alert("El resultado de la resta es: " + resultado);
      console.log("El resultado de la resta es: " + resultado);
    };
    resta(num1, num2);
  break;
  case "division" :
  case "/" :
    var division = function(num1, num2){
      var resultado = num1 / num2;
        alert("El resultado de la division es: " + resultado);
      console.log("El resultado de la division es: " + resultado);
    };
    division(num1, num2);
  break;

  default:
  console.log("Operador no valido seleccione nuevamente, gracias");
}
