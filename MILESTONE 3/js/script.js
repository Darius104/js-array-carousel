const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// prendiamo il container dall'html
const contBigImg = document.querySelector('.cont-big-img');

// Per ogni elemento di items vado a popolare il container
for( let z = 0; z < items.length; z++ ){
    const thisItem = items[z];
    const scritta = text[z];
    const scrittaPrincipale = title[z];

    //popolo il container con le immagini
    const newImg = `
    <div class="big-cont-foto">
            <img src="${thisItem}" alt="Img n ${z}">
            <div class="testo">
                <h3>${scrittaPrincipale}</h3>
                ${scritta}
            </div>
    </div>
    `;
    contBigImg.innerHTML += newImg;
}

const contLittleImg = document.querySelector('.cont-little-img');

for( let z = 0; z < items.length; z++ ){
    const thisItem = items[z];

    //popolo il container con le immagini
    const newImg = `
    <div class="little-cont-foto">
        <img src="${thisItem}" alt="Img n ${z}">
    </div>
    `;
    contLittleImg.innerHTML += newImg;
}

//active ad un elemento
let activeImage = 0;
const allBigImg = document.getElementsByClassName('big-cont-foto');
const allLittleImg = document.getElementsByClassName('little-cont-foto');
allBigImg[activeImage].classList.add('active');
allLittleImg[activeImage].classList.add('active');

const nextArrow = document.querySelector('.icon-2');
nextArrow.addEventListener('click', function(){
    allBigImg[activeImage].classList.remove('active');
    allLittleImg[activeImage].classList.remove('active');

    if( activeImage < items.length - 1){
        activeImage++;
    }else{
        activeImage = 0;
    }

    allBigImg[activeImage].classList.add('active');
    allLittleImg[activeImage].classList.add('active');

}
);

const backArrow = document.querySelector('.icon-1');
backArrow.addEventListener('click', function(){
    allBigImg[activeImage].classList.remove('active');
    allLittleImg[activeImage].classList.remove('active');

    if( activeImage > 0){
        activeImage--;
    }else{
        activeImage = items.length -1;
    }

    allBigImg[activeImage].classList.add('active');
    allLittleImg[activeImage].classList.add('active');

}
);

