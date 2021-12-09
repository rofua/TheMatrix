/*
const Prototype = () => {
    // Grab the click box that is currently avaiabile
    var searched = [...new Set(document.getElementById('div_Slide').children)].find(child => child.id.startsWith('Click_Box'))

    // If there is no found click box on the screen
    if (!searched) throw Error('[TPL] None click boxes found');
    
    // Highlight it for the consumer
    
}
*/

/*
* CSS Code

[id^=Click_Box] {
  border: 1px solid black;
}

*/
const css = '[id^=Click_Box] {border: 1px solid black;}'

const styleElement = document.createElement('style')
styleElement.type = 'text/css';

if (styleElement.styleSheet){
  // This is required for IE8 and below.
  styleElement.styleSheet.cssText = css;
} else {
  styleElement.appendChild(document.createTextNode(css));
}

document.getElementsByTagName("head")[0].appendChild(styleElement);
