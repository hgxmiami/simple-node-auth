var cosbyPos = 0;
var bibiPos = 0;

function dieRoll(){
    var num = Math.round(Math.random() * 11 + 1);
    document.getElementById("dice").innerHTML= num;
    cosbyPos = num + cosbyPos;
    if (cosbyPos <= 10)
        $("#toad").css("transform", "translateX(" + (cosbyPos * 77) + "px)");
    else if (cosbyPos <=20)
        $("#toad").css("transform", "translate(700px, " + ((cosbyPos -10)*80) + "px)");
    else if (cosbyPos <=30)
        $("#toad").css("transform", "translate(" +((30 - cosbyPos) * 77) +"px, 720px)");
    else if (cosbyPos <=40)
        $("#toad").css("transform", "translateY(" +((40 - cosbyPos) * 77) + "px, px)");
    return num;
}

var bee = document.getElementById("toad");
bee.onclick = function(){
    console.log(dieRoll());
    document.getElementById("toad").innerHTML=dieRoll();
};

