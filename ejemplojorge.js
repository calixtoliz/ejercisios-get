'use strict'
let persona={
nombre: "jorge",
edad:32,
sexo:"masculino", 
musica:"rock",   
}
function pedir(){
    alert(persona.nombre);
let opciones=0;
do{
    opciones=Number(prompt("opciones\n que quieres saber de mi\n 1.Nombre\n 2.Edad\n 3.Sexo 4.Que quieres saber\n 5.musica\n 6.Salir"));
    switch(opciones)
    {
        case 1:
        alert(persona.nombre);
        break;
        case 2:
        alert(persona.edad);
        break;
        case 3:
        alert(persona.sexo);
        break;
        case 4:
        let dato=prompt("que quieres saber\n Nombre,Edad,Sexo,Que tipo de musica me gusta");
        alert(persona[dato]);
        break;
        case 5:
        alert(persona.musica);
        break;

    }


}
while(opciones !=6)
        }