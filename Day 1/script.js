// getElementById
const judul = document.getElementById(`judul`);

judul.style.background='blue';
judul.innerText = 'wakwaw';
//---------------------------------

//getElementsByTagName --->ngambil dari HTML
const p = document.getElementsByTagName('p');
// p1[0].style.background='red';

for (let i = 0; i < (p.length-2); i++) {
    p[i].style.background='red';
    
}

const h1 = document.getElementsByTagName('h1');

// h1[0].style.background = 'black';
//--------------------------

//querySelector ---> ngambil dari CSS
const p4 = document.querySelector('#b p')
// p4.style.fontFamily = 'calibri'
p4.style.background = 'grey';


// const sectionB = document.getElementsById ('b')

// const p2p = sectionB.querySelector('p')

// p2.style.background = 'black'

//--------------------------