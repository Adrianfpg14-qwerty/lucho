const n = document.getElementById('n');

let a = prompt('Input: ');

console.log('For:');
let gotted;
let lineas = [];
let linea = '';
console.log(a.length);

for(let i=0; i<a.length; i++){
    gotted=a.substring(i,i+1);
    if(gotted=='\n' || gotted=='\r'){
        if(linea.length>0){
            lineas.push(linea);
            linea = '';
        }
    }else{
        linea += gotted;
        if(i==a.length-1){
            lineas.push(linea);
        }
    }
}

for(let line of lineas){
    n.innerHTML += `<p>${line.trim()}</p>`;
    console.log(line.trim());
}

