const oyuncu = document.getElementById("oyuncu");
const oyun = document.getElementById("oyun");
const tas = document.getElementById("tas");


//sonuc bolge
var sonuc = document.getElementById("sonuc");
const paun = document.getElementById("paun");
var sayac = 0;
// uyudu hareket etmek icin

window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        var oyuncuLeft = parseInt(window.getComputedStyle(oyuncu).getPropertyValue("left"))
        if (oyuncuLeft < 260) {
            oyuncu.style.left = (oyuncuLeft + 130) + "px"
        }

    }

    if (e.keyCode == "37") {
        var oyuncuLeft = parseInt(window.getComputedStyle(oyuncu).getPropertyValue("left"))
        if (oyuncuLeft > 0) {
            oyuncu.style.left = (oyuncuLeft - 130) + "px"
        }
    }
})
window.addEventListener("keydown", function (e) {
    if (e.keyCode == "32") {
        var vurus = document.createElement("div");
        var img = document.createElement("img");
        img.src = "mermi.png";
        img.classList.add("mermiImg");
        vurus.classList.add("mermi");
        vurus.style.left = oyuncu.style.left;
        vurus.appendChild(img);
        oyun.appendChild(vurus)

    }
    //mermi tasa vurdugunda
    setInterval(function collision() {
        var vurusLeft = parseInt(window.getComputedStyle(vurus).getPropertyValue("left"));
        var vurusTop = parseInt(window.getComputedStyle(vurus).getPropertyValue("top"));
        var tasLeft = parseInt(window.getComputedStyle(tas).getPropertyValue("left"));
        var tasTop = parseInt(window.getComputedStyle(tas).getPropertyValue("top"));

        if (((vurusTop - tasTop) < 80) && (tasTop < vurusTop)
            && (tasLeft == vurusLeft)) {
            vurus.style.display = 'none';
            tas.style.display = 'none';

        }


    }, 10);





    setTimeout(function () { vurus.remove() }, 1000)
})


function tasMove() {
    tas.style.display = 'block';
    var rastgele = ((Math.floor(Math.random() * 3)) * 130);
    tas.style.left = rastgele + "px";
    tas.classList.add("tasMove");
    sayac++;


}
setInterval(tasMove, 1500);

//oyun Bitti
function oyunBitti() {
    var tasTop = parseInt(window.getComputedStyle(tas).getPropertyValue("Top"));
    if (tasTop > 400) {
        sonuc.style.display = 'block';
        oyun.style.display = 'none';
        paun.innerHTML = `paun: ${sayac}`;
        sayac = 0;

    }
}
setInterval(oyunBitti, 10);
