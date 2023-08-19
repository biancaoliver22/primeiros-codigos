var trigonometria=prompt("escolha\n 1.seno\n 2.coseno\n 3.tangente");
var angulo=prompt("digite o angulo");
switch (trigonometria){
    case"1":
    alert(Math.sin((angulo*Math.PI)/180).toFixed(z));break;
    case"2":
    alert(Math.cos((angulo*Math.PI)/180).toFixed(z));break;
    case"3":
    alert(Math.tan((angulo*Math.PI)/180).toFixed(z));break;
    default:
        alert("opçao invalida");
}

