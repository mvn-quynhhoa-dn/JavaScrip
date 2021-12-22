//const
/*
const greeting = {
    message : "Hello",
    number : "five"
}

greeting.message = "say Hello instead";
console.log(greeting); 

//let

let greeting = "say Hi";
let times = 4;

if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello); 
 }
 console.log(hello);
 
 //template literals
 var content = `<div>
 Học lập trình online miễn phí
 <font color="red">Toidicode.com</font>
</div> `;
console.log(content);

//rest parameters
let domainList = (ho, quynh, ...other) =>
{
    console.log("Ho: " + ho);
    console.log("Ten: " + quynh);
    console.log("Other");
    console.log(other);
}
 

domainList('ho', 'quynh', 'QuangNgai', '22tuoi', 'teamPHP');

//default parameter

function Hello(domain = 'GOOGLE.COM')
{
    return domain;
}
 
// Sử dụng
console.log("KHÔNG truyền tham số: " + Hello());
console.log("CÓ truyền tham số: " + Hello('facebook.com'));


//arrow function

var team = function abcd(phrase) {
    return phrase.split(' ');
    };
    
    const teamphp = phrase => phrase.split(" ");
    console.log(teamphp("Quynh QuangNgai"));

    
   //classes,
class myteam{
    constructor (a){
        this.a=a;
    }
}
    class team1 extends myteam{
        constructor(a, b){
        super(a);
        this.b = b;
    }
}
const obj = new team1('Hello', 'Quynh');
console.log(' ${obj.a} Ho Thanh ${obj.b}');

//promise
function callAPI(url){
    return new Promise((res, rej) => {
        setTimeout(function(){
            if(url == 'ok'){
                res('thành công');

            }else{
                res('thất bại');
        }
    }, 3000);
    });
}
callAPI('ok')
    .then(e => {
        console.log(e);
    })
    .catch(err =>{
        console.log(err);
    });


//loops : findIndex
const array1 = [5, 12, 8, 130, 44];

const Number = (element) => element > 13;

console.log(array1.findIndex(Number));

//for of

let iterable = [2, 4, 6];

for (const value of iterable) {
  console.log(value);
}

*/
//find
const ages = [3, 10, 28, 20];
 
function checkAge(age) {
  return age > 20;
}
 
let age = ages.find(checkAge);
console.log(age);