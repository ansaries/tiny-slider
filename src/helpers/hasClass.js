import { classListSupport } from './classListSupport';

var hasClass = classListSupport ?
    function (el, str) { return el.classList.contains(str); } :
    function (el, str) { return el.className.indexOf(str) >= 0; };

export { classListSupport, hasClass };