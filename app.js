"use strict";



let styles = ['jazz','blues'];
console.log(styles);
styles.push('rock-n-roll');
console.log(styles);
function findmiddlevalue(styles){

      if(styles.length%2==1){
       styles[((styles.length-1)/2)]="classic";
      }
     return styles;
}
console.log(findmiddlevalue(styles));
console.log(styles.shift());
console.log(styles);
styles.unshift('rap','reggae');
console.log(styles);




function sumInput(){

    let arr =[];
    while(true){
          let number = prompt("input number:");
          if(!isFinite(number) || number==""||number==null){
                break;
          }
         arr.push(Number(number));
    }
   
    let sum=0;
    for (let number of arr) {
         sum+=number;
    }
    return sum;
}

console.log(sumInput());