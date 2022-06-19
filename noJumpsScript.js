//-------------OLD CODE
// ``const n = document.getElementById('n');

// let a = prompt('Input: ');

// console.log('For:');
// let gotted;
// let lineas = [];
// let linea = '';
// console.log(a.length);

// for(let i=0; i<a.length; i++){
//     gotted=a.substring(i,i+1);
//     if(gotted=='\n' || gotted=='\r'){
//         if(linea.length>0){
//             lineas.push(linea);
//             linea = '';
//         }
//     }else{
//         linea += gotted;
//         if(i==a.length-1){
//             lineas.push(linea);
//         }
//     }
// }

// for(let line of lineas){
//     n.innerHTML += `<p>${line.trim()}</p>`;
//     console.log(line.trim());
// }


//--------------NEW CODE

const n = document.getElementById('n');
let input = prompt('Input: ');
let arr = [], arr2 = [];


for(let i=0; i<input.length; i++){
    arr.push(input.substring(i,i+1));
}

let line = '';
for(let key of arr){
    if((key == '\n' || key == '\r')){
        if(line != ''){
            arr2.push(line.trim());
            line = '';
        }
    }else{
        if(!((key == ' ') && (line.substring(line.length-1,line.length)) == ' ')){
            line += key;
        }
    }
}
arr2.push(line.trim());
console.log(arr2);

for(let key of arr2){
    n.innerHTML += `<p>${key}</p>`;
}
