let son= +prompt('Son kiriting ')
while(isNaN(son)||son==''){
    son=+prompt('son kiritishingiz kerak');   

}
if(son%2==0){
    alert('juft son kiritdingiz '+son);
}
else if(son%2==1){
    alert('toq son kiritdingiz '+son);
}

let num=+prompt ('Son kiriting')
let daraja=+prompt('Darajasini kiriting')
let res= 1;
while(isNaN(num)||num==''){
    num=+prompt('son kiritishingiz kerak');   

}

for (let i = 0; i < daraja; i++) {
    res*=num;
    
}
alert(res);