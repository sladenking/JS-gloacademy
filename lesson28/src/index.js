import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'element-matches';
import countTimer from './modules/countTimer';
import scrollHead from './modules/scrollHead';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import inputDigits from './modules/inputDigits';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//Timer
countTimer();
//ScrollDown
scrollHead();
//Menu
toggleMenu();
//PopUp
togglePopUp();
//Tabs
tabs();
//Slider
slider();
//ChangePhoto
changePhoto();
//Input Digits
inputDigits();
//Calculator
calc(100);
//Send-ajax-form
sendForm();
