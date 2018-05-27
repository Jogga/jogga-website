var al = "hello@alf.de";

var all = al.replace(/[a-z@]/giy, function(c) {return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});

function rot(string) {
    var chars = [];
    string.split(string).forEach(char => {
        chars.push(char.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26));
    });
    return chars.join("");
}
al = al.replace(/\w+(?=@)|\w+(?=\.)/gi, rot(s));
console.log(al)