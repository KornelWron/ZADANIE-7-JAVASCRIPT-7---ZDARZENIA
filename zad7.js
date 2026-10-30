// Zadanie 1
const kontener = document.getElementById('kontener');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

kontener.addEventListener('click', function() {
    kontener.style.backgroundColor = getRandomColor();
});

kontener.addEventListener('mouseenter', function() {
    kontener.style.fontSize = '2em';
});

kontener.addEventListener('mouseleave', function() {
    kontener.style.fontSize = '1em';
});

// Zadanie 2
const paragraf = document.querySelector('.wyroznione');

paragraf.addEventListener('dblclick', function() {
    paragraf.textContent = 'powiat radomski';
});

paragraf.addEventListener('mouseenter', function() {
    console.log(paragraf.textContent);
});

// Zadanie 3
const artykul = document.getElementById('artykul');
const divLiczba = document.getElementById('liczba');

artykul.addEventListener('keydown', function(event) {
    let aktualnaSzerokosc = artykul.offsetWidth;
    artykul.style.width = (aktualnaSzerokosc + 1) + 'px';

    if (/^\d$/.test(event.key)) {
        divLiczba.textContent += event.key;
    }
});
