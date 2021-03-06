import cipher from './helper/cipher';
import hideShow from './helper/hideShow';
import font from './helper/font';

// Add smooth scrolling if available
if ("scrollTo" in window) {
    var scrollButtons = document.getElementsByClassName('js-scroll-top');
    for(var i = 0; i < scrollButtons.length; i++) {
        var button = scrollButtons[i];
        button.removeAttribute('href');
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        });
    }
}

// Decipher mailto
var emailLinks = document.getElementsByClassName('js-cipher-mailto');
for(var i = 0; i < emailLinks.length; i++) {
    var link = emailLinks[i];
    link.setAttribute("href", cipher.cipherMail(link.getAttribute("href")));
    hideShow.show(link, 1);
}

// Decipher email
var emailElements = document.getElementsByClassName('js-cipher-mail');
for(var i = 0; i < emailElements.length; i++) {
    var element = emailElements[i];
    element.innerHTML = cipher.cipherMail(element.innerHTML);
    hideShow.show(element, 1);
}

// Decipher tel
var telLinks = document.getElementsByClassName('js-cipher-tel');
for(var i = 0; i < telLinks.length; i++) {
    var link = telLinks[i];
    link.setAttribute("href", cipher.cipherPhone(link.getAttribute("href")));
    hideShow.show(link, 1);
}

// Decipher phone
var phoneElements = document.getElementsByClassName('js-cipher-phone');
for(var i = 0; i < phoneElements.length; i++) {
    var element = phoneElements[i];
    element.innerHTML = cipher.cipherPhone(element.innerHTML);
    hideShow.show(element, 1);
}

// Load additional fonts
font.load('/font/Alegreya-Italic.woff', 'Alegreya', '400', 'italic');