var v = 0;
var j = 1;
function acabou(){
    document.getElementById("reiniciar").innerHTML += "<button onclick='restart()'>Reinicar</button>";
    j = 0;
    v = 0;
}
function qGanhou(){
    if (j == 2){
        alert("Parábens! Mario ganhou.")
        acabou();
    }
    else{
        alert("Parabéns! Luigi ganhou.")
        acabou();
    }
}
function restart(){
    document.getElementById(1).style.backgroundImage = '';
    document.getElementById(2).style.backgroundImage = '';
    document.getElementById(3).style.backgroundImage = '';
    document.getElementById(4).style.backgroundImage = '';
    document.getElementById(5).style.backgroundImage = '';
    document.getElementById(6).style.backgroundImage = '';
    document.getElementById(7).style.backgroundImage = '';
    document.getElementById(8).style.backgroundImage = '';
    document.getElementById(9).style.backgroundImage = '';
    v = 0;
    j = 1;
    document.getElementById("reiniciar").innerHTML = '';
}
function ganhou(){
        if (v >= 5){
            if ((document.getElementById(1).style.backgroundImage == document.getElementById(2).style.backgroundImage) && (document.getElementById(2).style.backgroundImage == document.getElementById(3).style.backgroundImage) && document.getElementById(1).style.backgroundImage != ''){
                qGanhou();
            }
            else if ((document.getElementById(4).style.backgroundImage == document.getElementById(5).style.backgroundImage) && (document.getElementById(5).style.backgroundImage == document.getElementById(6).style.backgroundImage) && document.getElementById(4).style.backgroundImage != ''){
                qGanhou();
            }
            else if ((document.getElementById(7).style.backgroundImage == document.getElementById(8).style.backgroundImage) && (document.getElementById(8).style.backgroundImage == document.getElementById(9).style.backgroundImage) && document.getElementById(7).style.backgroundImage != ''){
                qGanhou();
            }
            else if ((document.getElementById(1).style.backgroundImage == document.getElementById(4).style.backgroundImage) && (document.getElementById(4).style.backgroundImage == document.getElementById(7).style.backgroundImage) && document.getElementById(1).style.backgroundImage != ''){
                qGanhou();
            }
            else if ((document.getElementById(2).style.backgroundImage == document.getElementById(5).style.backgroundImage) && (document.getElementById(5).style.backgroundImage == document.getElementById(8).style.backgroundImage) && document.getElementById(2).style.backgroundImage != ''){
                qGanhou();
            }
            else if ((document.getElementById(3).style.backgroundImage == document.getElementById(6).style.backgroundImage) && (document.getElementById(6).style.backgroundImage == document.getElementById(9).style.backgroundImage) && document.getElementById(3).style.backgroundImage != ''){
                qGanhou();
            }
            else if ((document.getElementById(1).style.backgroundImage == document.getElementById(5).style.backgroundImage) && (document.getElementById(5).style.backgroundImage == document.getElementById(9).style.backgroundImage) && document.getElementById(1).style.backgroundImage != ''){
                qGanhou();
            }
            else if ((document.getElementById(3).style.backgroundImage == document.getElementById(5).style.backgroundImage) && (document.getElementById(5).style.backgroundImage == document.getElementById(7).style.backgroundImage) && document.getElementById(3).style.backgroundImage != ''){
                qGanhou();
            }  
            else if(v >= 9) {
                alert("Deu velha.");
                acabou();
            }
    }
}
function desenhar(id){
    if ((j == 1) && document.getElementById(id).style.backgroundImage == ''){
        document.getElementById(id).style.backgroundImage = "url('Mario3x.png')";
        v++;
        j = 2;
    }
    else if ((j == 2) && document.getElementById(id).style.backgroundImage == ''){
        document.getElementById(id).style.backgroundImage = "url('Luigi3x.png')";
        v++;
        j = 1;
    }
    ganhou();
}