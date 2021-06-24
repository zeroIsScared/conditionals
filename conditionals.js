/* 1. Write a JavaScript program that accept two integers 
and display the larger in the console.*/

let first = 3;
let second = 85;
first > second ? console.log(first) : console.log(second);

/*2. Write a JavaScript conditional statement to find the sign 
of product of three numbers. Display the specified sign in the console. 
Sample numbers : 3, -7, 2
Output : The sign is - */

let product = Math.sign(3 * (-7) *2);

 switch (product) {
     case NaN :
         console.log(`NaN`);
         break;
    case 0 :
        console.log(`+`);
        break;
    case 1 :
        console.log(`+`);
        break;
    case -1 :
        console.log(`-`);
        break;
    case -0 : 
        console.log(`-`);
        break;
    default :
        console.log(Unknown);
        break;
 }

 /*3. Write a JavaScript conditional statement to sort three 
 numbers. Display the result in the console
Sample numbers : 0, -1, 4
Output : 4, 0, -1*/

let x = 0;
let y = -1;
let z = 4;

if (z>x && z>y) 
   {
    if (x > y) 
       { 
        console.log(z +','+ x +','+ y);
       } 
    else
       {
        console.log(z +','+ y +','+ x);
       }
   }
    else if (x>z && x>y)
     {
        if (z > y) 
           {
            console.log(x +','+ z +','+ y);
           } 
        else 
           {
            console.log(x +','+ y +','+ z);
           }
    }
    else if ( y>x && y>z)
     {
        if (x > z) 
           {
            console.log(y +','+ x +','+ z);
           } 
        else {
            console.log(y +','+ z +','+ y);
        }
    }
    
    /*4. Write a JavaScript conditional statement to find the largest of five numbers.Display the result in the console. 
Sample numbers : -5, -2, -6, 0, -1
Output : 0*/

let x = -5;
let y = -2;
let z = -6;
let n = 0;
let m = -1;

if (x>y && x>z && x>n && x>m)
 {
   console.log(x);
 } 
else if (y>x && y>z && y>n && y>m)
 {
   console.log(y);
 }
else if (z>x && z>y && z>n && z>m)
 {
     console.log(z);
 }
 else if (n>x && n>y && n>z && n>m)
 {
     console.log(n);
 }
 else if (m>x && m>y && m>n && m>z)
 {
     console.log(m);
 }