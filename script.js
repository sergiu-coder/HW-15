for(let i=0; i<11; i++){
console.log(i++);}

// for(let i =0; i <3; i++){  alert(`number ${i}!`);}
let i =0;
while(i <3){
alert(i);
i++;
}

let result = 1;
let number = 1;
while(number<=5) {
result=result * number;
number++;
}
console.log(result);

// Home Work pt2

let a =+prompt('a?','');

switch(a){
    case 0 :
        alert(0);
    break;
    case 1:
        alert(1);
        break;
    case 2 :
    case 3 :
        alert('2,3');
    break;
    }

// Home Work pt3

// switch(browser){
//     case'Edge':
//     alert("You've got the Edge!");
//     break;
//     case'Chrome':
//     case'Firefox':
//     case'Safari':
//     case'Opera':    
//     alert('Okay we support these browsers too');
//     break;
//     default:   
//      alert('We hope that this page looks ok!');}

let browser=prompt('What browser you use ?');
if(browser=='Edge')
{
    alert("You've got the Edge!"); 
}
else if(browser == 'Chrome' || 
   browser == 'Firefox' || 
   browser == 'Safari' ||
   browser == 'Opera' )
   {
    alert('Okay we support these browsers too'); 
}
else 
if(browser==''){
alert('We hope that this page looks ok!');
}
