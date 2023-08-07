
function clickme(){
    let word=prompt("Enter your name");
let message=["Happy bithday",
             "Happy birthday",
             "Happy birthday"];

let i= message.length;
let randoms= Math.floor(Math.random()*i);
document.getElementById("msg").innerHTML= message[randoms]+` ${word} `;

}
//Math.random() used with Math.floor() can be used to return random integers.