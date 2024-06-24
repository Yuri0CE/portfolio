const flipsfx = new Audio('flip.mp3');
const backsfx = new Audio('back_music.mp3');

const startbtn = document.querySelector('.starter');
const card = '<td><div class="flip-container"><div class="flipper"><div class="front"></div><div class="back"><img src="Imagens/hxh_tarot_cards_verse.jpg" class="imagens"/></div></div></div></td>';

const imgs = [
    "<img src='Imagens/0_the_fool_gon.jpg' class='imagens'>", "<img src='Imagens/0_the_fool_gon.jpg' class='imagens'>",
    "<img src='Imagens/1_the_magician_hisoka.jpg' class='imagens'>", "<img src='Imagens/1_the_magician_hisoka.jpg' class='imagens'>",
    "<img src='Imagens/2_thp_pakunoda.jpg' class='imagens'>", "<img src='Imagens/2_thp_pakunoda.jpg' class='imagens'>",
    "<img src='Imagens/4_the_emperor_silva.jpg' class ='imagens'>", "<img src='Imagens/4_the_emperor_silva.jpg' class ='imagens'>",
    "<img src='Imagens/6_the_lovers_meruem_komugi.jpg' class ='imagens'>", "<img src='Imagens/6_the_lovers_meruem_komugi.jpg' class ='imagens'>",
    "<img src='Imagens/7_the_chariot_morel.jpg' class ='imagens'>", "<img src='Imagens/7_the_chariot_morel.jpg' class ='imagens'>",
    "<img src='Imagens/10_wof_kite.jpg' class ='imagens'>", "<img src='Imagens/10_wof_kite.jpg' class ='imagens'>",
    "<img src='Imagens/12_thm_chrollo.jpg' class ='imagens'>", "<img src='Imagens/12_thm_chrollo.jpg' class ='imagens'>",
    "<img src='Imagens/13_death_netero.jpg' class ='imagens'>", "<img src='Imagens/13_death_netero.jpg' class ='imagens'>",
    "<img src='Imagens/18_the_moon_illumi.jpg' class ='imagens'>", "<img src='Imagens/18_the_moon_illumi.jpg' class ='imagens'>",
    "<img src='Imagens/21_the_world_meruem.jpg' class ='imagens'>", "<img src='Imagens/21_the_world_meruem.jpg' class ='imagens'>"
];

var points = document.querySelector('.points');
var point = 0;

var pick = new Array(2);
var controle = true;
var pares = 0;

var movimento = 0;



startbtn.addEventListener('click', () => {
    document.querySelector('.inicio').remove();

    //gerar cartas
    const first = document.querySelector('.first');
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');

    for (let i = 0; i < 8; i++) {
        first.innerHTML += card;
        second.innerHTML += card;
    }

    for (let i = 0; i < 7; i++) {
        if (i > 0) { third.innerHTML += card; }
        if (i == 0) { third.innerHTML += '<td></td>'; }
    }

    const faces = document.querySelectorAll('.front');
    const cards = document.querySelectorAll('.flipper');
    const table = document.querySelector('.tabela');
    const body = document.querySelector('.page');

    for (let i = 0; i < 22; i++) {
        var rnd = parseInt(Math.random() * imgs.length);
        faces[i].innerHTML += imgs.splice(rnd, 1);
    }
    backsfx.volume = 0.3;
    backsfx.loop = true;
    backsfx.play();

    points.textContent = "Pontuação: " + point


    setTimeout(function () {
        cards.forEach(carta => {
            carta.classList.add('flip');
        })
    }, 5000);

    //comparador de cartas
    cards.forEach(elemento => {
        elemento.addEventListener('click', () => {

            if (elemento.classList.contains('flip') && controle == true) {

                pick[movimento] = elemento;
                movimento++;
                elemento.classList.remove('flip');
                flipsfx.play();

                controle = false;
                setTimeout(function () {
                    controle = true;
                }, 800)

                if (movimento == 2) {

                    if (pick[0].innerHTML == pick[1].innerHTML) {
                        pares++;

                        setTimeout(function () {
                            if (pares < 11) {
                                point += 100;
                                points.textContent = "Pontuação: " + point;
                            } else {
                                table.remove()
                                point += 100;
                                points.textContent = "Pontuação: " + point;
                                body.innerHTML += "<div class='alinha'><img src='Imagens/happy_gon.png' class='happy'></div>" + "<div class='alinha'><h1 class='win'>Parabéns!! você achou todas as combinações e fez " + point + " pontos!</h1></div>"

                            }
                        }, 800)

                    } else {
                        setTimeout(function () {
                            pick[0].classList.add('flip');
                            pick[1].classList.add('flip');
                            if (point > 0) {
                                point -= 20;
                                points.textContent = "Pontuação: " + point;
                            }
                        }, 600)
                    }

                    movimento = 0;
                }
            }
        })
    })
})