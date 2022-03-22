window.addEventListener("load", init);
var kepek = [
    {
        cim: "Hiroshi Odokawa",
        eleresiut:"./kepek/hiroshi-odokawa-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/hiroshi-odokawa"
    },
    {
        cim: "Atsuya Baba",
        eleresiut:"./kepek/atsuya-baba-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/atsuya-baba"
    },
    {
        cim: "Ayumu Goriki",
        eleresiut:"./kepek/ayumu-goriki-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/ayumu-goriki"
    },
    {
        cim: "Dobu",
        eleresiut:"./kepek/dobu-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/dobu"
    },
    {
        cim: "Eiji Kakihana",
        eleresiut:"./kepek/eiji-kakihana-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/eiji-kakihana"
    },
    {
        cim: "Fuyuki Yamamoto",
        eleresiut:"./kepek/fuyuki-yamamoto-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/fuyuki-yamamoto"
    },
    {
        cim: "Hajime Tanaka",
        eleresiut:"./kepek/hajime-tanaka-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/hajime-tanaka"
    },
    {
        cim: "Haruhito Yano",
        eleresiut:"./kepek/haruhito-yano-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/haruhito-yano"
    },
    {
        cim: "Kenshiro Daimon",
        eleresiut:"./kepek/kenshiro-daimon-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/kenshiro-daimon"
    },
    {
        cim: "Koshiro Daimon",
        eleresiut:"./kepek/koshiro-daimon-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/koshiro-daimon"
    },
    {
        cim: "Kensuke Shibagaki",
        eleresiut:"./kepek/kensuke-shibagaki-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/kensuke-shibagaki"
    },
    {
        cim: "Miho Shirakawa",
        eleresiut:"./kepek/miho-shirakawa-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/miho-shirakawa"
    },
    {
        cim: "Rui Nikaidou",
        eleresiut:"./kepek/rui-nikaidou-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/rui-nikaidou"
    },
    {
        cim: "Shun Imai",
        eleresiut:"./kepek/shun-imai-odd-taxi-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/shun-imai-odd-taxi"
    },
    {
        cim: "Taichi Kabasawa",
        eleresiut:"./kepek/taichi-kabasawa-1.jpg",
        leiras:"Bio",
        link:"https://www.anime-planet.com/characters/taichi-kabasawa"
    }
]
function ID(elem){
    return document.getElementById(elem);
}
function select(elem){
    return  document.querySelectorAll(elem)
}
var aktkepindex = 0;
function init(){
    kiadas()
    kep()
    select("#bal")[0].addEventListener("click",bal)
    select("#jobb")[0].addEventListener("click",jobb)
}
function kiadas(){
    var megjeleno = " ";
    for (let i = 0; i < kepek.length; i++) {
        megjeleno = megjeleno + "<div class='tarolo'><div class='elemek'>" + "<h3>"+ kepek[i].cim +"</h3>" + "<img src='"+ kepek[i].eleresiut+ "' class='kepek' id='"+i +"' alt='cicás képek'/>"+
        "<br><a href="+kepek[i].link+"class='biok'>"+kepek[i].leiras+"</a></div></div>"
    }
    ID("galeria").innerHTML = megjeleno;

}

function kep() {
    for (let index = 0; index < kepek.length; index++) {
        select("#galeria div img")[index].addEventListener("click",clickk)
    }
}
function clickk(a) {
    aktkepindex= a.target.id
    megjelen();
}
function megjelen() {
    var megjeleno = "<img src='"+kepek[aktkepindex].eleresiut +"' alt='fokep'/>"
    ID("fokep").innerHTML = megjeleno;
    
}

function bal() {
    aktkepindex--;
    if (aktkepindex < 0) {
        aktkepindex=kepek.length-1
    }
    megjelen()
}
function jobb() {
    aktkepindex++;
    if (aktkepindex > kepek.length-1) {
        aktkepindex=0
    }
    megjelen()
}
