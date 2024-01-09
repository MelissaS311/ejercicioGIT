let nombreAlumno=prompt("ingrese el nombre del alumno")
let materia=prompt("ingrese el nombre de la materia")

let  nota1=parseFloat(prompt("Ingrese la primera nota (de 0 a 10)"))
let  nota2=parseFloat(prompt("Ingrese la segunda nota (de 0 a 10)"))
let  nota3=parseFloat(prompt("Ingrese la tercera nota (de 0 a 10)"))

if(isNaN(nota1)|| isNaN(nota2)|| isNaN(nota3)|| nota1<0||nota1>10||nota2<0||nota2>10||nota3<0||nota3>10){
     console.log("Por favor, ingrese una nota validad, en el rango de 0 a 10")
} else{
     console.log("Nota1..."+ nota1)
     console.log("Nota2..."+ nota2)
     console.log("Nota3..."+ nota3)
     let promedio= (nota1+nota2+nota3)/3
     console.log("PROMEDIO..."+promedio)
     
     if (promedio>=7){
        console.log(` ${nombreAlumno},¡Felicidades! Has aprobado con un ${promedio} `)
     }else{
        console.log(` ${nombreAlumno}, Nos vemos pronto en clase. El promedio obtenido es ${promedio}`)
     }
    }