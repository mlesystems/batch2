function first(){
    document.getElementById("slider").src="/img/1.2.jpg";
}
function second(){
    document.getElementById("slider").src="/img/2.2.webp";
}
function third(){
    document.getElementById("slider").src="/img/3.1.jpeg";
}

setInterval(first,2000);
setInterval(second,4000);
setInterval(third,6000);

