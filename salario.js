var salariobase=parseFloat(prompt("salario"));
var horasemanaltrabalhada=parseFloat(prompt("horas semanais trabalhada"));
var hora=salariobase/160;
var horaextra=hora*1.5;
if (horasemanaltrabalhada>=40){
salario=salariobase + (horaextra*(horasemanaltrabalhada-40));
alert (salario);
}
else{
salario=salariobase-(horasemanaltrabalhada*hora);
alert(salario);//alert("R$" + salario.tofxed(2));
}