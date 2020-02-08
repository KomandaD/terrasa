let a = document.querySelector('.menuButton').querySelectorAll('div');
let b = document.querySelector('.menuImage').querySelector('img');

for(let i=0;i<a.length;i++){
    a[i].onclick = ()=> b.src = 'img/menu/m'+ i +'i.jpg';
}


