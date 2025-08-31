let wheel = document.querySelector('.wheel');
let spinbtn = document.querySelector('.spinbtn');
let value = Math.ceil(Math.random() * 3600);

spinbtn.onclick = function(){
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);
}