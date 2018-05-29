import cipher from './cipher';

// Add smooth scrolling if available
if ("scrollTo" in window) {
    var scrollButtons = document.getElementsByClassName('scroll-top');
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
var emailLinks = document.getElementsByClassName('cipher-mailto');
for(var i = 0; i < emailLinks.length; i++) {
    emailLinks[i].setAttribute("href", cipher.cipherMail(emailLinks[i].getAttribute("href")));
}

// Decipher email
var emailElements = document.getElementsByClassName('cipher-mail');
for(var i = 0; i < emailElements.length; i++) {
    emailElements[i].innerHTML = cipher.cipherMail(emailElements[i].innerHTML);
}

// Decipher tel
var telLinks = document.getElementsByClassName('cipher-tel');
for(var i = 0; i < telLinks.length; i++) {
    telLinks[i].setAttribute("href", cipher.cipherPhone(telLinks[i].getAttribute("href")));
}

// Decipher phone
var phoneElements = document.getElementsByClassName('cipher-phone');
for(var i = 0; i < phoneElements.length; i++) {
    phoneElements[i].innerHTML = cipher.cipherPhone(phoneElements[i].innerHTML);
}