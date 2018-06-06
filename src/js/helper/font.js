'use-strict';

function load(url, name, weight, style, display) {
    if(!name || !url) {
        console.log('can\'t load font without name or URL!');
        return;
    }
    var fontURL = 'url('+ url +')';
    var fontName = name;
    var fontWeight = weight || '400';
    var fontStyle = style || 'normal';
    var fontDisplay = display || 'swap';

    var font = new FontFace(fontName, fontURL, {
        style: fontStyle, 
        weight: fontWeight, 
        display: fontDisplay
    });

    font.load().then( function() {
        document.fonts.add(font);
    });
}
export default { load };