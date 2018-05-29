'use strict';

function rot13(match, p1, p2, offset, string) {
	return match.replace(/[a-z]/gi , function(c) {
		return String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= "M" ? 13 : -13));
	});
}
function rot5(match, p1, p2, offset, string) {
	return match.replace(/\d/gi , function(c) {
		return String.fromCharCode(c.charCodeAt(0) + (c <= "4" ? 5 : -5));
	});
}


function cipherMail(mail) {
	return mail.replace(/[a-z]+(?=@)|[a-z]+(?=\.)/gi, rot13);
}

function cipherPhone(phone) {
	return phone.replace(/\d\d\d\d$|\d\d\d\d(?=<)/g, rot5);
}


export default { cipherMail, cipherPhone };