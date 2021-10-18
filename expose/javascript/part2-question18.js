var timer = setInterval(test, 1000);
function test(){
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}