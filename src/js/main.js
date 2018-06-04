import cipher from './cipher';
import hideShow from './hideShow';

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

var font = new FontFace("Alegreya", "url(/font/Alegreya-Italic.woff)", {
    style: 'italic', weight: '400', display: 'swap'
});

font.load().then(function() {
    document.fonts.add(font);
});

var mono = new FontFace("IBM Plex Mono", "url(/font/IBMPlexMono-Regular.woff)", {
    style: 'normal', weight: '400', display: 'swap'
});

mono.load().then(function() {
    console.log("ready");
    document.fonts.add(mono);
});


// @font-face {
//     font-family: 'IBM Plex Mono';
//     src: url('/font/IBMPlexMono-Regular.woff');
//     font-weight: 400;
//     font-style: normal;
//     font-display: swap;
// }
