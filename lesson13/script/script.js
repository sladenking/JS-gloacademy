'use strict';

let inputText = document.getElementById('myText'),
    myBtn = document.getElementById('myBtn'),
    text = document.getElementById('text');

let showText = () => {
    text.textContent =  localStorage.getItem('memory');
};

myBtn.addEventListener('click', () => {
    localStorage.setItem('memory', inputText.value);
    showText();
});

localStorage.removeItem('myText');

showText();

// document.cookie = 'name=value';

// function setCookie(key, value, year, month, day, path, domain, secure) {
//     let cookieStr = encodeURI(key) + '=' + encodeURI(value);
//     if (year) {
//         const expires = new Date(year, month-1, day);
//         cookieStr += '; expires=' + expires.toUTCString();
//     }
    
//     cookieStr += path ? '; path=' + encodeURI(path) : '';
//     cookieStr += domain ? '; domain=' + encodeURI(domain) : '';
//     cookieStr += secure ? ': secure' : '';

//     document.cookie = cookieStr;
// }

// setCookie('Favourite celebration', 'New Year', 2021, 1, 1);
