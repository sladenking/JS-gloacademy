const book = document.querySelectorAll('.book'),
    books = document.querySelector('.books'),
    adv = document.querySelector('.adv'),
    body = document.querySelector('body'),
    heading = document.querySelectorAll('a');


books.prepend(book[1]);
books.append(book[2]);
book[3].before(book[4]);
body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
heading[4].textContent = 'Книга 3. this и Прототипы Объектов';
adv.remove();

book[0].classList.add('ul2');
book[5].classList.add('ul5');
book[2].classList.add('ul6');

let li2 = document.querySelectorAll('.ul2>ul>li'),
    li5 = document.querySelectorAll('.ul5>ul>li'),
    li6 = document.querySelectorAll('.ul6>ul>li');

li2[9].after(li2[2]);
li2[3].after(li2[6]);
li2[6].after(li2[8]);

li5[10].before(li5[8]);
li5[8].before(li5[5]);
li5[1].after(li5[9]);
li5[9].after(li5[3]);
li5[3].after(li5[4]);


let part8 = document.createElement('li');
part8.textContent = 'Глава 8: За пределами ES6';
li6[8].after(part8);








