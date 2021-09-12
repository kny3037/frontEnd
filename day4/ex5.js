let startin;
let endin;

function startNo() {
  startin = prompt("시작인덱스");
}
function endNo() {
  endin = prompt("시작인덱스");
}
function strMethod() {
  let input = prompt("문자열을 입력하세요");
  document.getElementById("startin").innerHTML = startin;
  document.getElementById("endin").innerHTML = endin;
  document.getElementById("len").innerHTML = input.length;
  document.getElementById("last").innerHTML = input.lastIndexOf("am");
  document.getElementById("subs11").innerHTML = input.substring(sinput, einput);
 
}