var animation = "animate__shakeX"

function animationSK() {
    const element = document.getElementById("SK");
    element.classList.add('animate__animated', animation);

    element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', animation);
    });

}

function animationCZ() {
    const element = document.getElementById("CZ");
    element.classList.add('animate__animated', animation);

    element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', animation);
    });

}

function animationEK() {
    const element = document.getElementById("EK");
    element.classList.add('animate__animated', animation);

    element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', animation);
    });

}

function onload() {
    document.title = "Parrot TV";
    sk = document.getElementById("SK");
    cz = document.getElementById("CZ");
    ek = document.getElementById("EK");
    pls = document.getElementById("plsselect")
    sk.style.display = "none";
    cz.style.display = "none";
    ek.style.display = "none";
    pls.style.display = "block";

}


function switchtoSK() {
    animationSK()
    var player = new Playerjs({id:"player", ready:"PlayerReady", poster:"./Images/BG.jpg"});
    document.title = "Parrot TV | SK";
    SKbtn = document.getElementById("btnSK");
    CZbtn = document.getElementById("btnCZ");
    EKbtn = document.getElementById("btnEK");
    sk = document.getElementById("SK");
    cz = document.getElementById("CZ");
    ek = document.getElementById("EK");
    pls = document.getElementById("plsselect")
    SKbtn.classList.add("nav__link--active");
    CZbtn.classList.remove("nav__link--active");
    EKbtn.classList.remove("nav__link--active");
    sk.style.display = "block";
    cz.style.display = "none";
    ek.style.display = "none";
    pls.style.display = "none";
}

function switchtoCZ() {
    animationCZ()
    var player = new Playerjs({id:"player", ready:"PlayerReady", poster:"./Images/BG.jpg"});
    document.title = "Parrot TV | CZ";
    SKbtn = document.getElementById("btnSK");
    CZbtn = document.getElementById("btnCZ");
    EKbtn = document.getElementById("btnEK");
    sk = document.getElementById("SK");
    cz = document.getElementById("CZ");
    ek = document.getElementById("EK");
    pls = document.getElementById("plsselect")
    SKbtn.classList.remove("nav__link--active");
    CZbtn.classList.add("nav__link--active");
    EKbtn.classList.remove("nav__link--active");
    cz.style.display = "block";
    sk.style.display = "none";
    ek.style.display = "none";
    pls.style.display = "none";
}

function switchtoEK() {
    animationEK()
    var player = new Playerjs({id:"player", ready:"PlayerReady", poster:"./Images/BG.jpg"});
    document.title = "Parrot TV | Ekostol";
    SKbtn = document.getElementById("btnSK");
    CZbtn = document.getElementById("btnCZ");
    EKbtn = document.getElementById("btnEK");
    sk = document.getElementById("SK");
    cz = document.getElementById("CZ");
    ek = document.getElementById("EK");
    SKbtn.classList.remove("nav__link--active");
    CZbtn.classList.remove("nav__link--active");
    EKbtn.classList.add("nav__link--active");
    sk.style.display = "none";
    cz.style.display = "none";
    ek.style.display = "block";
}