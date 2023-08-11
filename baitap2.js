//Bài 1
// Cách 1
var a = prompt('Mời bạn nhập số:')
//a%3===0? alert('số này chia hết cho 3'):alert(' số này không chia hết cho 3')
// Cách 2
/**if(a%3===0){
    alert('Số này chia hết cho 3')
}else{
    alert('Số này không chia hết cho 3')
}*/
//Cách 3
/**switch(a%3){
    case 0:
        alert('Số này chia hết cho 3')
        break
    default:
        alert('Số này không chia hết cho 3')
}*/


//Bài 2
//Cách 1 
//a%2===0? alert('số này là số chẵn'):alert(' số này là số lẻ')
// Cách 2
/**if(a%2===0){
    alert('Số này là số chẵn')
}else{
    alert('Số này là số lẻ')
}*/
//Cách 3
/**switch(a%2){
    case 0:
        alert('Số này là số chẵn')
        break
    default:
        alert('Số này là số lẻ')
}*/




//Bài 3
//Cách 1
//a>=0? alert('số này là số dương'):alert(' số này là số âm')
// Cách 2
/**if(a>=0){
    alert('Số này là số dương')
}else {
    alert('Số này là số âm')
}*/
//Cách 3
/**if (a>=0) {
    a=true
}
else{
    a=false
}
switch(a){
    case true:
        alert('Số này là số dương')
        break
    default:
        alert('Số này là số âm')
}*/




//Bài 4
/**var prime = true
if(a<2){
    prime= false
}else{
    for(var i = 2;i<=a/2;i++){
        if(a%i==0){
            prime=false
            break
        }
    
    
}
}

prime? alert('Đây là số nguyên tố'):alert('Đây không phải là số nguyên tố')

*/

//Bài 5
//Cách 1
/**if(a<=100 && a>=0){
    alert('Số này nằm trong khoảng từ 0 đến 100')
}else{
    alert('Số này không nằm trong khoảng từ 0 đến 100')
}*/

//Cách 2
// a>=0 && a<=100 ?  alert('Số này nằm trong khoảng từ 0 đến 100'):alert('Số này không nằm trong khoảng từ 0 đến 100')
//Bài 6
//Cách 1
/**if(a>8.0 && a<=10){
    alert('Học sinh này đạt loại giỏi')
}else if(a<8.0 && a>=6.5 ){
    alert('Học simh này đạt loại khá')
}else if(a<6.5 && a>=5){
    alert('Học sinh này đạt loại trung bình')
}else{
    alert('Học sinh này đạt loại yếu')
}*/
switch(a){
    case(a<=10 && a>8.0):
        alert('Học sinh này đạt loại giỏi')
        break
    case(a<8.0 && a>=6.5):
        alert('Học sinh này đạt loại khá')
        break
    case(a<6.5 && a>=5.0):
        alert('Học sinh này đạt loại trung bình')
        break
    default:
        alert('Học sinh này đạt loại yếu')
}


