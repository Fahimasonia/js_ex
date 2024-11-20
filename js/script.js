//show hide text
function textShow(){document.getElementById('sh').style.display="block";
}
function textHide(){document.getElementById('sh').style.display="none";
}

//change style
function changeStyle(){document.getElementById('cs').style.fontSize="50px";
}

//on off bulb
function bulbOn(){document.getElementById('bulb').src="images/bulbon.gif";
  
}
function bulbOff(){document.getElementById('bulb').src="images/bulboff.gif";
  
}

//change text
function changeText(){document.getElementById('ct').innerHTML="Hello there";
  
}

//show text
function showText() {document.getElementById('st').innerHTML="Hello world";
}
//display date
function showDate(){document.getElementById('sd').innerHTML=Date();}

//change color
function changeColor() {document.getElementById('cc').style.color="red";}

//change style
function changeStyle() {document.getElementById('cb').style.border="1px solid red";}
//repeat text
function repeatText(){var data="welcome home";
document.getElementById('rt').innerHTML=data.repeat(3);

}
//manipulate data
var number1=5;
var number2=4;
var result=number1+number2;
function mData(){document.getElementById('md').innerHTML=result;}

//manipulate data1
let x=5;
let y=4;
let z=x*y;
function mlData(){document.getElementById('m').innerHTML=z;}

//division
let price1,price2,total;
price1=30;
price2=5;
total=price1/price2;
function divisionData(){document.getElementById('dd').innerHTML=total;}
//ex13
let age1,age2;
age1=20;
age2=30;
age1+=age2;
function adData(){document.getElementById('ad').innerHTML=age1;}
//ex14
let a,b,c;
a=9;
b=6;
c=a!=b;
function comparison(){document.getElementById('cm').innerHTML=c;}
//ex15
let d,e,f;
d=5;
e="5";
f=d===e;
function textData(){document.getElementById('td').innerHTML=f;}
//ex16
function classEx(){document.getElementsByClassName('p')[0].innerHTML="Hello";}

//ex17
function tagEx(){let data=document.getElementsByTagName('p');alert(data.length);

}
//ex18
function tagEx(){let data=document.getElementsByTagName('p');alert(data.length);}
//20 create an object
const person ={fastname:"nil",lastname:"john",age:50,eyecolor:"blue"}
function displayData(){document.getElementById('ti').innerHTML=person;
}
 
